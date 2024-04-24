import React, { useState, useEffect } from "react";
import drinkService from "../services/drinkService";

function DrinksMenu() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const drinksData = await drinkService.getDrinks();
        // const drinksData = [
        //   {
        //     _id: {
        //       $oid: "66100646fe2ccf09c43c9985",
        //     },
        //     name: "modzajtko version 2",
        //     flavor: "SWEET",
        //     baseAlcohol: "RUM",
        //     ingredients: [
        //       "świeża mięta",
        //       "cukier trzcinowy",
        //       "sok z limonki",
        //       "soda",
        //       "biały rum",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "W dużym kieliszku zgnieść 6-8 listków mięty z 2 łyżeczkami cukru. Dodać sok z limonki i rozpuścić cukier. Dodać kilka kostek lodu i wlać rum. Dopełnić napojem gazowanym. Wymieszać i udekorować gałązką mięty i plasterkiem limonki.",
        //     rating: 5,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277eb8665166aff0a0d4",
        //     },
        //     name: "Mojito",
        //     flavor: "REFRESHING",
        //     baseAlcohol: "Rum",
        //     ingredients: [
        //       "biały rum",
        //       "świeża mięta",
        //       "cukier trzcinowy",
        //       "sok z limonki",
        //       "soda",
        //       "plasterki limonki",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "W dużej szklance zgnieść 6-8 listków mięty z 2 łyżeczkami cukru trzcinowego. Dodać sok z limonki i rozpuścić cukier. Dodać kilka kostek lodu i wlać rum. Dopełnić napojem gazowanym. Wymieszać i udekorować gałązką mięty i plasterkiem limonki.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0d5",
        //     },
        //     name: "Sex on the Beach",
        //     flavor: "FRUITY",
        //     baseAlcohol: "Wodka",
        //     ingredients: [
        //       "wódka",
        //       "likier brzoskwiniowy",
        //       "sok z żurawiny",
        //       "sok pomarańczowy",
        //       "plasterki pomarańczy",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Wstrząsnąć wszystkie składniki z lodem. Nalej do szklanki typu Highball. Udekoruj plasterkiem pomarańczy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0d6",
        //     },
        //     name: "Piña Colada",
        //     flavor: "SWEET",
        //     baseAlcohol: "Rum",
        //     ingredients: [
        //       "biały rum",
        //       "mleczko kokosowe",
        //       "sok ananasowy",
        //       "kostki lodu",
        //       "plasterki ananasa",
        //     ],
        //     strength: 6,
        //     howToMake:
        //       "Wszystkie składniki, z wyjątkiem plasterków ananasa, umieścić w blenderze i zmiksować. Następnie należy wylać do szklanki, dodać kostki lodu i udekorować plasterkiem ananasa.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0d7",
        //     },
        //     name: "Kamikadze",
        //     flavor: "SOUR",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "triple sec",
        //       "sok z limonki",
        //       "plasterki limonki",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Wstrząsnąć wszystkie składniki z lodem i odcedzić do szklanki do drinków. Udekorować plasterkiem limonki.",
        //     rating: 7,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0d8",
        //     },
        //     name: "Long Island Iced Tea",
        //     flavor: "SOUR",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "rum",
        //       "tequila",
        //       "gin",
        //       "triple sec",
        //       "syrop cukrowy",
        //       "sok z cytryny",
        //       "cola",
        //       "kostki lodu",
        //       "plasterki cytryny",
        //     ],
        //     strength: 9,
        //     howToMake:
        //       "Wstrząsnąć wódkę, rum, tequilę, gin, triple sec, syrop cukrowy i sok z cytryny z lodem. Następnie przelać do szklanki z kostkami lodu, uzupełnić colą i udekorować plasterkiem cytryny.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0d9",
        //     },
        //     name: "Aperol Spritz",
        //     flavor: "BITTER",
        //     baseAlcohol: "Aperol",
        //     ingredients: [
        //       "Aperol",
        //       "Prosecco",
        //       "soda",
        //       "plasterki pomarańczy",
        //       "kostki lodu",
        //     ],
        //     strength: 6,
        //     howToMake:
        //       "Napełnij szklankę dużymi kostkami lodu. Następnie dodaj 3 części prosecco, 2 części Aperolu oraz szczyptę sody. Delikatnie wymieszaj. Na koniec udekoruj plasterkiem pomarańczy.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0da",
        //     },
        //     name: "Jägerbomb",
        //     flavor: "SWEET",
        //     baseAlcohol: "Jägermeister",
        //     ingredients: ["Jägermeister", "energetyk", "kostki lodu"],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj 1 uncję Jägermeistera. Na końcu wlej energicznego napoju.",
        //     rating: 7,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0db",
        //     },
        //     name: "Tequila Sunrise",
        //     flavor: "SWEET",
        //     baseAlcohol: "Tequila",
        //     ingredients: [
        //       "tequila",
        //       "sok pomarańczowy",
        //       "syrop grenadine",
        //       "plasterki pomarańczy",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Wlej tequilę i sok pomarańczowy do szklanki wypełnionej lodem. Delikatnie wymieszaj. Następnie powoli dodaj syrop grenadine, który powinien opaść na dno szklanki, tworząc efekt wschodu słońca. Udekoruj plasterkami pomarańczy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0dc",
        //     },
        //     name: "Malibu Sunrise",
        //     flavor: "SWEET",
        //     baseAlcohol: "Malibu",
        //     ingredients: [
        //       "Malibu rum",
        //       "sok ananasowy",
        //       "sok pomarańczowy",
        //       "syrop grenadine",
        //       "plasterki pomarańczy",
        //       "kostki lodu",
        //     ],
        //     strength: 6,
        //     howToMake:
        //       "Wlej Malibu rum i soki ananasowy oraz pomarańczowy do szklanki wypełnionej lodem. Delikatnie wymieszaj. Następnie powoli dodaj syrop grenadine, który powinien opaść na dno szklanki, tworząc efekt wschodu słońca. Udekoruj plasterkami pomarańczy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0dd",
        //     },
        //     name: "Żar Tropików",
        //     flavor: "SWEET",
        //     baseAlcohol: "Rum",
        //     ingredients: [
        //       "ciemny rum",
        //       "sok ananasowy",
        //       "sok pomarańczowy",
        //       "sok z mango",
        //       "syrop z marakui",
        //       "plasterki ananasa",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Wszystkie składniki umieścić w shakerze z lodem i wstrząsnąć. Następnie przelać do szklanki do drinków wypełnionej kostkami lodu. Udekorować plasterkami ananasa.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0de",
        //     },
        //     name: "Moscow Mule",
        //     flavor: "SOUR",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "sok z limonki",
        //       "piwo ginger beer",
        //       "plasterki limonki",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w szklance miedzianej lub szklance typu Highball. Następnie wlej wódkę i sok z limonki. Dopełnij piwem ginger beer. Delikatnie wymieszaj. Udekoruj plasterkiem limonki.",
        //     rating: 7,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0df",
        //     },
        //     name: "Tom Collins",
        //     flavor: "SOUR",
        //     baseAlcohol: "Gin",
        //     ingredients: [
        //       "gin",
        //       "sok z cytryny",
        //       "syrop cukrowy",
        //       "soda",
        //       "plasterki cytryny",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Highball. Następnie dodaj gin, sok z cytryny i syrop cukrowy. Delikatnie wymieszaj. Dopełnij sodą. Udekoruj plasterkiem cytryny.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e0",
        //     },
        //     name: "Blue Hawaiian",
        //     flavor: "FRUITY",
        //     baseAlcohol: "Rum",
        //     ingredients: [
        //       "biały rum",
        //       "Blue Curacao",
        //       "mleczko kokosowe",
        //       "sok ananasowy",
        //       "kostki lodu",
        //       "plasterki ananasa i pomarańczy",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w shakerze, a następnie dodaj biały rum, Blue Curacao, mleczko kokosowe i sok ananasowy. Wstrząśnij energicznie. Przelej do szklanki typu Hurricane. Udekoruj plasterkami ananasa i pomarańczy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e1",
        //     },
        //     name: "Screwdriver",
        //     flavor: "SWEET",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "sok pomarańczowy",
        //       "plasterki pomarańczy",
        //       "kostki lodu",
        //     ],
        //     strength: 6,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Highball. Następnie dodaj wódkę i sok pomarańczowy. Delikatnie wymieszaj. Udekoruj plasterkiem pomarańczy.",
        //     rating: 7,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e2",
        //     },
        //     name: "Cosmopolitan",
        //     flavor: "SOUR",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "triple sec",
        //       "sok z żurawiny",
        //       "sok z limonki",
        //       "plasterki limonki",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w shakerze. Następnie dodaj wódkę, triple sec, sok z żurawiny i sok z limonki. Wstrząśnij energicznie. Przelej do kieliszka typu Martini. Udekoruj plasterkiem limonki.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e3",
        //     },
        //     name: "White Russian",
        //     flavor: "CREAMY",
        //     baseAlcohol: "Wódka",
        //     ingredients: ["wódka", "kahlua", "śmietanka", "kostki lodu"],
        //     strength: 6,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Old Fashioned. Następnie dodaj wódkę i kahlua. Delikatnie wymieszaj. Dopełnij śmietanką.",
        //     rating: 7,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e4",
        //     },
        //     name: "Margarita",
        //     flavor: "SOUR",
        //     baseAlcohol: "Tequila",
        //     ingredients: [
        //       "tequila",
        //       "triple sec",
        //       "sok z limonki",
        //       "plasterki limonki",
        //       "sól",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Najpierw zamocz brzeg szklanki do margarity w soku z limonki, a następnie w soli, aby utworzyć obrzeże. Umieść kostki lodu w shakerze. Następnie dodaj tequilę, triple sec i sok z limonki. Wstrząśnij energicznie. Przelej do szklanki z lodem. Udekoruj plasterkiem limonki.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e5",
        //     },
        //     name: "Cosmopolitan",
        //     flavor: "SOUR",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "triple sec",
        //       "sok żurawinowy",
        //       "sok z limonki",
        //       "plasterki limonki",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w shakerze. Następnie dodaj wódkę, triple sec, sok żurawinowy i sok z limonki. Wstrząśnij energicznie. Przelej do kieliszka do martini. Udekoruj plasterkiem limonki.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e6",
        //     },
        //     name: "Caipirinha",
        //     flavor: "SOUR",
        //     baseAlcohol: "Cachaça",
        //     ingredients: ["cachaça", "limonka", "cukier", "kostki lodu"],
        //     strength: 7,
        //     howToMake:
        //       "Pokrój limonkę na kawałki i umieść ją w szklance. Dodaj cukier i roztłucz limonkę z cukrem, aby uwolnić soki. Następnie dodaj cachaçę i kostki lodu. Delikatnie wymieszaj i podawaj.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e7",
        //     },
        //     name: "Bloody Mary",
        //     flavor: "SPICY",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "sok pomidorowy",
        //       "sok z cytryny",
        //       "sól",
        //       "pieprz",
        //       "sos Worcestershire",
        //       "sos Tabasco",
        //       "gałka muszkatołowa",
        //       "plasterki limonki",
        //       "seler naciowy",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Highball. Następnie dodaj wódkę, sok pomidorowy, sok z cytryny, sól, pieprz, sos Worcestershire, sos Tabasco i gałkę muszkatołową. Wymieszaj delikatnie. Udekoruj plasterkiem limonki i selerem naciowym.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e8",
        //     },
        //     name: "Cuba Libre",
        //     flavor: "SWEET",
        //     baseAlcohol: "Rum",
        //     ingredients: [
        //       "biały rum",
        //       "cola",
        //       "sok z limonki",
        //       "plasterki limonki",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Highball. Następnie dodaj biały rum i sok z limonki. Dopełnij colą. Delikatnie wymieszaj. Udekoruj plasterkiem limonki.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0e9",
        //     },
        //     name: "Wściekłe Psy",
        //     flavor: "SPICY",
        //     baseAlcohol: "Tequila",
        //     ingredients: [
        //       "tequila",
        //       "likier Blue Curaçao",
        //       "sok z limonki",
        //       "sok z cytryny",
        //       "sos Tabasco",
        //       "plasterki limonki",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w shakerze. Następnie dodaj tequilę, likier Blue Curaçao, sok z limonki, sok z cytryny i kilka kropel sosu Tabasco (ilość według preferencji ostrości). Wstrząśnij energicznie. Przelej do szklanki koktajlowej. Opcjonalnie udekoruj plasterkami limonki.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0ea",
        //     },
        //     name: "Blue Lagoon",
        //     flavor: "FRUITY",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "Blue Curacao",
        //       "sok z cytryny",
        //       "Sprite",
        //       "plasterki cytryny",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Highball. Następnie dodaj wódkę, Blue Curacao i sok z cytryny. Dopełnij Sprite. Delikatnie wymieszaj. Udekoruj plasterkiem cytryny.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0eb",
        //     },
        //     name: "Paradise Bay",
        //     flavor: "FRUITY",
        //     baseAlcohol: "Rum",
        //     ingredients: [
        //       "biały rum",
        //       "likier kokosowy",
        //       "sok ananasowy",
        //       "sok z marakui",
        //       "plasterki ananasa",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Hurricane. Następnie dodaj biały rum, likier kokosowy, sok ananasowy i sok z marakui. Delikatnie wymieszaj. Udekoruj plasterkami ananasa.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0ec",
        //     },
        //     name: "Vodka Sunrise",
        //     flavor: "SWEET",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "sok pomarańczowy",
        //       "syrop grenadine",
        //       "plasterki pomarańczy",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Highball. Następnie dodaj wódkę i sok pomarańczowy. Delikatnie wymieszaj. Powoli wlej syrop grenadine, aby opadł na dno szklanki, tworząc efekt gradientu kolorów. Nie mieszaj. Udekoruj plasterkiem pomarańczy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0ed",
        //     },
        //     name: "White Negroni",
        //     flavor: "BITTER",
        //     baseAlcohol: "Gin",
        //     ingredients: [
        //       "gin",
        //       "Lillet Blanc",
        //       "biały wermut",
        //       "plasterki pomarańczy",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Old Fashioned. Następnie dodaj gin, Lillet Blanc i biały wermut. Delikatnie wymieszaj. Udekoruj plasterkiem pomarańczy.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0ee",
        //     },
        //     name: "Vodka Martini",
        //     flavor: "SWEET",
        //     baseAlcohol: "Wódka",
        //     ingredients: [
        //       "wódka",
        //       "vermouth",
        //       "plasterki oliwek",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w mieszalniku. Następnie dodaj wódkę i vermouth. Delikatnie wymieszaj. Przelej do kieliszka do martini. Udekoruj plasterkami oliwek.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0ef",
        //     },
        //     name: "Whisky Sour",
        //     flavor: "SOUR",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "sok z cytryny",
        //       "syrop cukrowy",
        //       "plasterki pomarańczy",
        //       "wiśnia na patyku",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w shakerze. Następnie dodaj whisky, sok z cytryny i syrop cukrowy. Wstrząśnij energicznie. Przelej do szklanki typu rocks. Udekoruj plasterkiem pomarańczy i wiśnią na patyku.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f0",
        //     },
        //     name: "Old Fashioned",
        //     flavor: "RICH",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "cukier",
        //       "bitters",
        //       "plasterki pomarańczy",
        //       "plasterki cytryny",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w szkle typu Old Fashioned. Następnie dodaj cukier i bitters. Delikatnie wymieszaj. Dolej whisky. Delikatnie wymieszaj ponownie. Udekoruj plasterkiem pomarańczy i cytryny.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f1",
        //     },
        //     name: "Manhattan",
        //     flavor: "RICH",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "wermut czerwony",
        //       "Angostura bitters",
        //       "plasterki wiśni maraschino",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w mieszalniku. Następnie dodaj whisky, wermut czerwony i Angostura bitters. Delikatnie wymieszaj. Przelej do kieliszka koktajlowego. Udekoruj plasterkiem wiśni maraschino.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f2",
        //     },
        //     name: "Godfather",
        //     flavor: "RICH",
        //     baseAlcohol: "Whisky",
        //     ingredients: ["whisky", "amaretto", "kostki lodu"],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szkle typu Old Fashioned. Następnie dodaj whisky i amaretto. Delikatnie wymieszaj. Udekoruj ewentualnie wiórkami pomarańczy lub plasterkiem cytryny.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f3",
        //     },
        //     name: "Mint Julep",
        //     flavor: "REFRESHING",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "syrop cukrowy",
        //       "świeże listki mięty",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść listki mięty i syrop cukrowy w szkle typu Old Fashioned. Delikatnie rozgnieć miętę, aby uwolnić jej aromat. Następnie dodaj kostki lodu i whisky. Delikatnie wymieszaj. Udekoruj gałązką świeżej mięty.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f4",
        //     },
        //     name: "Penicylina",
        //     flavor: "SPICY",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "syrop imbirowy",
        //       "syrop miodowy",
        //       "sok z cytryny",
        //       "plasterki imbiru",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w szklance typu Old Fashioned. Następnie dodaj whisky, syrop imbirowy, syrop miodowy i sok z cytryny. Delikatnie wymieszaj. Udekoruj plasterkiem imbiru.",
        //     rating: 9,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f5",
        //     },
        //     name: "Almost There",
        //     flavor: "RICH",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "likier kawowy",
        //       "syrop klonowy",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj whisky, likier kawowy i syrop klonowy. Delikatnie wymieszaj. Udekoruj ewentualnie ziarnami kawy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f6",
        //     },
        //     name: "Jameson Smash",
        //     flavor: "REFRESHING",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky Jameson",
        //       "syrop cukrowy",
        //       "sok z limonki",
        //       "świeże listki mięty",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść listki mięty i syrop cukrowy w szkle. Delikatnie rozgnieć miętę, aby uwolnić jej aromat. Następnie dodaj sok z limonki, whisky Jameson i kostki lodu. Delikatnie wymieszaj. Udekoruj ewentualnie gałązką świeżej mięty.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f7",
        //     },
        //     name: "Democrat",
        //     flavor: "RICH",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "wermut czerwony",
        //       "triple sec",
        //       "syrop cukrowy",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj whisky, wermut czerwony, triple sec i syrop cukrowy. Delikatnie wymieszaj. Udekoruj ewentualnie plasterkiem cytryny lub skórką pomarańczy.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f8",
        //     },
        //     name: "Fabio",
        //     flavor: "FRUITY",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "likier malinowy",
        //       "sok z limonki",
        //       "syrop cukrowy",
        //       "plasterki malin",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj whisky, likier malinowy, sok z limonki i syrop cukrowy. Delikatnie wymieszaj. Udekoruj plasterkami malin.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0f9",
        //     },
        //     name: "Cueras",
        //     flavor: "RICH",
        //     baseAlcohol: "Bourbon",
        //     ingredients: [
        //       "bourbon",
        //       "sherry",
        //       "kawa",
        //       "truskawka",
        //       "tonik",
        //       "kostki lodu",
        //     ],
        //     strength: 8,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj bourbon, sherry, kawę, truskawkę i tonik. Delikatnie wymieszaj. Udekoruj ewentualnie plasterkiem truskawki.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0fa",
        //     },
        //     name: "Pickleback Sour",
        //     flavor: "RICH",
        //     baseAlcohol: "Jameson",
        //     ingredients: [
        //       "Jameson infuzowany prażonymi orzechami laskowymi",
        //       "ogórek kiszony",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj Jameson infuzowany prażonymi orzechami laskowymi i ogórek kiszony. Delikatnie wymieszaj. Udekoruj ewentualnie plasterkiem ogórka.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        //   {
        //     _id: {
        //       $oid: "6610277fb8665166aff0a0fb",
        //     },
        //     name: "Signeiros",
        //     flavor: "FRUITY",
        //     baseAlcohol: "Whisky",
        //     ingredients: [
        //       "whisky",
        //       "wiśnie",
        //       "syrop sezamowy",
        //       "piana pomarańczowa",
        //       "kostki lodu",
        //     ],
        //     strength: 7,
        //     howToMake:
        //       "Umieść kostki lodu w szklance. Następnie dodaj whisky, wiśnie, syrop sezamowy i pianę pomarańczową. Delikatnie wymieszaj. Udekoruj ewentualnie wiśnią.",
        //     rating: 8,
        //     _class: "com.ZapitaTech.MixIt.Recipes.Recipe",
        //   },
        // ];
        setDrinks(drinksData);
      } catch (error) {
        console.error("Error in drinks page: ", error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div>
      <h1>List of drinks</h1>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>{drink.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DrinksMenu;
