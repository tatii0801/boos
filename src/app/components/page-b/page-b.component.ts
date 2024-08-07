import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  divisass: Array<any>;
  imgDivisass:Array<any>;

  constructor() {
  
    this.imgDivisass=[
      {img: "../../../../assets/imagenP4/usd.png",nombre:"USD"},
      {img: "../../../../assets/imagenP4/eur.png",nombre:"EUR"},
      {img: "../../../../assets/imagenP4/gbp.png",nombre:"GBP"},
      {img: "../../../../assets/imagenP4/jpy.png",nombre:"JPY"},
      {img: "../../../../assets/imagenP4/cny.png",nombre:"CNY"},
      {img: "../../../../assets/imagenP4/aud.png",nombre:"AUD"},
      {img: "../../../../assets/imagenP4/btc.png",nombre:"BTC"},
      {img: "../../../../assets/imagenP4/arg.png",nombre:"ARG"},
    ];

    this.divisass = [

      //tabla 1
      {
        img:"../../../../assets/imagenP4/usd.png",
        nom:"1 USD",
        USD: 1.000000,
        EUR: 0.919901,
        GBP: 0.811469,
        JPY: 108.9079,
        CNY: 7.057569,
        AUD: 1.619886,
        BTC: 0.000140,
        ARS: 64087725,

        nom1:"Inverse",
        USD1: 1.000000,
        EUR2: 1.087074,
        GBP3: 1.232332,
        JPY4: 0.009182,
        CNY5: 0.141692,
        AUD6: 0.617328,
        BTC7: 7148.757,
        ARS8: 0.015414,
      },
      //tabla 2
      {
        img: "../../../../assets/imagenP4/eur.png",
        nom:"1 EUR",
        USD: 1.087074,
        EUR: 1.000000,
        GBP: 0.882127,
        JPY: 108.9079,
        CNY: 7.672100,
        AUD: 1.760936,
        BTC: 0.000152,
        ARS: 70.52637,

        nom1:"Inverse",
        USD1: 0.919901,
        EUR2: 1.000000,
        GBP3: 1.133623,
        JPY4: 0.008447,
        CNY5: 0.130342,
        AUD6: 0.567880,
        BTC7: 6576.146,
        ARS8: 0.014179,
      },
      //tabla 3
      {
        img:"../../../../assets/imagenP4/gbp.png",
        nom:"1 GBP",
        USD: 1.232332,
        EUR: 1.133623,
        GBP: 1.000000,
        JPY: 134.2108,
        CNY: 8.697272,
        AUD: 1.996238,
        BTC: 0.000172,
        ARS: 79.95034,

        nom1:"Inverse",
        USD1: 0.811469,
        EUR2: 0.882127,
        GBP3: 1.000000,
        JPY4: 0.007451,
        CNY5: 0.114979,
        AUD6: 0.500942,
        BTC7: 5800.997,
        ARS8: 0.012508,
      },
      //tabla 4
      {
        img:"../../../../assets/imagenP4/rub.png",
        nom:"1 RUB",
        USD: 0.013226,
        EUR: 0.012166,
        GBP: 0.010732,
        JPY: 1.440365,
        CNY: 0.093340,
        AUD: 0.021424,
        BTC: 0.000002,
        ARS: 0.858036,

        nom1:"Inverse",
        USD1: 75.61134,
        EUR2: 82.19511,
        GBP3: 93.17830,
        JPY4: 0.694268,
        CNY5: 10.71351,
        AUD6: 46.67696,
        BTC7: 540527.1,
        ARS8: 1.165452,
      },
    ]
  }

  ngOnInit(): void {
  }

}
