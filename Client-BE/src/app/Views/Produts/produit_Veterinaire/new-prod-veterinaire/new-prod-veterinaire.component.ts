import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../../Services/Produit/produit.service';
import { AnimalService } from '../../../../Services/Animal/animal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitVeterinaire, Produit } from '../../../../model/produit';

@Component({
  selector: 'app-new-prod-veterinaire',
  templateUrl: './new-prod-veterinaire.component.html',
  styleUrls: ['./new-prod-veterinaire.component.css']
})
export class NewProdVeterinaireComponent implements OnInit {

  typeanimals: any;

  demandeFile: any = File;

  catprodVeterinaire:any ;

  produitForm: FormGroup;

  produitVeterinaire:ProduitVeterinaire = new ProduitVeterinaire() ;
  produit:Produit = new Produit() ;

  constructor(private catProdService:ProduitService,private animalServices:AnimalService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCatProduit() ;
    this.getAllTypeAnimal() ;
    this.produitForm = this.formBuilder.group({
      nom: ([this.produit.nom, Validators.required]),
      description: [this.produit.description, Validators.required],
      modeemploi: [this.produit.modeemploi, Validators.required],
      prix: [this.produit.prix, Validators.required],
      typeproduit: [this.produit.typeproduit, Validators.required],
      idcatprodveterinaire: ['', Validators.required],

    });
  }


  getCatProduit(){
    this.catProdService.getCategorieProdVegetal()
    .subscribe(data=>{
     console.log(data);
     this.catprodVeterinaire = data ;
   },err=>{
     console.log(err);

   });

  }

  getAllTypeAnimal(){
    this.animalServices.getAllTypeAnimal()
    .subscribe(data=>{
     console.log(data);
     this.typeanimals = data ;

   },err=>{
     console.log(err);

   });
  }

  saveProdVeterinaire(){
    this.produit.referenceproduit = "ref5" ;
    this.produit.typeproduit = this.produitForm.value.typeproduit  ;
    this.produit.nom = this.produitForm.value.nom ;
    this.produit.description = this.produitForm.value.description ;
    this.produit.modeemploi = this.produitForm.value.modeemploi ;
    this.produit.prix = this.produitForm.value.prix ;

    this.produitVeterinaire.produit = this.produit ;
    this.produitVeterinaire.categorieprodveterinaire.idcatprodveterinaire = parseInt(this.produitForm.value.idcatprodveterinaire) ;

    this.produitVeterinaire.veterinaire.numuser = "user4" ;

    console.log(this.produitVeterinaire);

    const formData = new FormData();
    formData.append('produitVeterinaire', JSON.stringify(this.produitVeterinaire));
    formData.append('file1', this.demandeFile);

    this.catProdService.saveProduitVeterinaires(formData)
    .subscribe(data=>{
      console.log(data);

    },err=>{
      console.log(err);

    });
  }


  onSelectFile(event) {
    const file = event.target.files[0];
    this.demandeFile = file;
  }

}
