import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto.models';



@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.css'
})
export class ProdutosFormComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: '',
    quantidade: 0,
    preco: 0
  }

constructor(
  private produtoService: ProdutoService,
  private route: ActivatedRoute,
  private router: Router
){}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id){
    const produtoId = Number(id);
    const produtoExistente = this.produtoService.getProdutoById(produtoId);
    if (produtoExistente){
      this.produto = { ...produtoExistente };
    }

  }
}

salvarProduto(): void {
  if (this.produto.id === 0) {
    const novoId = this.produtoService.getProdutos().length + 1;
    this.produto.id = novoId;
    this.produtoService.addProduto(this.produto);
  }else{
    this.produtoService.updateProduto(this.produto);
  }
    this.router.navigate(['/produtos-lista'])
  };

};