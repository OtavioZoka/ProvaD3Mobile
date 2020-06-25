import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  async insert(valor) {
    const pessoas: any[] = (await this.storage.get("pessoas"));
    if (pessoas.length === null || pessoas.length === undefined) {
      valor.id = 1;
    }
    else {
      valor.id = (pessoas.length || 0) + 1;
    }

    return this.storage.set("pessoas", [...pessoas, valor]);

  }
  async getByid(valor) {
    const pessoas: any[] = (await this.storage.get("pessoas"));
    return pessoas.find((pessoa) => pessoa.id == valor);
  }
  async getRacaCor(valor) {
    const pessoas: any[] = (await this.storage.get("pessoas"));
    return pessoas.filter((pessoa) => pessoa.saudeMental == valor)
  }
  constructor(private storage: Storage) { }
}
