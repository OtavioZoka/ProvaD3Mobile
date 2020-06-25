import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../service/pessoas.service'
import { pessoas } from '../pessoas.model'
@Component({
  selector: 'app-saudemental',
  templateUrl: './saudemental.page.html',
  styleUrls: ['./saudemental.page.scss'],
})
export class SaudementalPage implements OnInit {
  Pessoa: pessoas = {} as pessoas;
  constructor(private service: PessoasService) { }

  ngOnInit() {
  }
  enviar(form) {
    this.service.insert(form.value);

  }
}
