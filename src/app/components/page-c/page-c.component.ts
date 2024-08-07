import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnInit {
  signoss: Array<any>;
  horoscopo: Array<any>;

  constructor() {
    this.signoss = [
      {simboloSig: "../../../../assets/imagenP4/aries.png", nombre: "Aries" },
      {simboloSig: "../../../../assets/imagenP4/leo.png", nombre: "Leo" },
      {simboloSig: "../../../../assets/imagenP4/sagitario.png", nombre: "Sagitario" },
     
      {simboloSig: "../../../../assets/imagenP4/tauro.png", nombre: "Tauro" },
      {simboloSig: "../../../../assets/imagenP4/virgo.png", nombre: "Virgo" },
      {simboloSig: "../../../../assets/imagenP4/capricornio.png", nombre: "Capricornio" },
     
      {simboloSig: "../../../../assets/imagenP4/geminis.png", nombre: "Geminis" },
      {simboloSig: "../../../../assets/imagenP4/libra.png", nombre: "Libra" },
      {simboloSig: "../../../../assets/imagenP4/acuario.png", nombre: "Acuario" },
     
      {simboloSig: "../../../../assets/imagenP4/cancer.png", nombre: "Cancer" },
      {simboloSig: "../../../../assets/imagenP4/escorpio.png", nombre: "Escorpio" },
      {simboloSig: "../../../../assets/imagenP4/piscis.png", nombre: "Piscis" },
    ]


    this.horoscopo = [
      {
        tituloo: "Aries",
        descripcion1: "Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas",
        descripcion2: "Aries tiene como virtud la pureza, así que cada vez que se demuestran amor, saben que, sin duda, es sincero. El rasgo negativo de su relación es que, si se hieren, no se perdonarán ni olvidarán fácilmente.",
        img: "../../../../assets/imagenP4/aries.png",
      },
      {
        tituloo: "Leo",
        descripcion1: "El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónd quiere llegar y nada ni nadie podrá evitarlo.",
        descripcion2: "Tienden sentir empatía por los demás y son comprensivos, además de altamente sociables. Como buen rey de la selva, son líderes por naturaleza, independientes, valientes, aventureros y fuertes, pero también muy cabezotas",
        img: "../../../../assets/imagenP4/leo.png",
      },
      {
        tituloo: "Sagitario",
        descripcion1: "Sagitario es uno de los signos más brillantes y positivos del zodiaco. Las personas Sagitario suelen ser de carácter aventurero y emprendedor, con la mente abierta y siempre dispuestas a conocer a nuevas personas o a vivir experiencias diferentes. Son intuitivos, buenos organizadores y muy generosos.",
        descripcion2: "Son intuitivas, buenas organizadoras, generosas (pero sin malgastar) y muy cuidadosas, lo que las convierte en buenas gestoras de situaciones y proyectos.",
        img: "../../../../assets/imagenP4/sagitario.png",
      }
    ]
  }

  ngOnInit(): void {
  }

}
