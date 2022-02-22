import { Component, OnInit } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Element} from "@angular/compiler";

@Component({
  selector: 'app-virtual-fair',
  templateUrl: './virtual-fair.component.html',
  styleUrls: ['./virtual-fair.component.scss']
})
export class VirtualFairComponent implements OnInit {
  buttonText: string = "Modifier"
  buttonIcon: string = "edit"

  title: string = "Coiffeur en shape"
  smallDescription: string = "Coiffure bestiale."
  description: string = "Coupe pour homme, femme. Je fais aussi les coupes pour les jeunes femmes participant à leur bal de finissant." +
    "Vous êtes un artiste ayant besoin de la plus bel coupe possible pour votre spectacle du soir? Pas de problème, je suis là pour vous!"

  isEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeEditMode() {
    if (this.isEditing) {
      this.buttonText = "Modifier"
      this.buttonIcon = "edit"
    } else {
      this.buttonText = "Sauvegarder"
      this.buttonIcon = "check"
    }
    this.isEditing = !this.isEditing;
  }
}
