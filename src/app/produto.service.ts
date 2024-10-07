import { Injectable} from '@angular/core';
import { Produto } from './models/produto.models';

/* é um decorador que você adiciona a uma classe ára indicar se pode ser injetada*/

@Injectable({
    providedIn: 'root' /*trás a raiz do aplicativo*/

})
export class ProdutoService{
    //array privado
    private produtos: Produto[] = [
        { id: 1, nome:'Produto A', quantidade: 10, preco: 15.5 },
        { id: 1, nome:'Produto B', quantidade: 20, preco: 30.5 },
        { id: 1, nome:'Produto C', quantidade: 5, preco: 50.5 },
    ];

    //o construtor consta vazio sendo necessário para a injeção de dependência
    constructor() {}
    //para obter a lista de produtos

    getProdutos(): Produto[] {
        return this.produtos;
    }

    addProduto(produto: Produto): void{
        this.produtos.push(produto);

    }

    deleteProduto(id: number): void {
        this.produtos = this.produtos.filter(produto => produto.id !== id);
    }

    getProdutoById(id: number): Produto | undefined{
        return this.produtos.find(produto => produto.id === id);
    }

    updateProduto(updateProduto: Produto): void {
        const index = this.produtos.findIndex(produto => produto.id === updateProduto.id);
        if (index !== -1){
            this.produtos[index] = updateProduto;
        }
    }
}