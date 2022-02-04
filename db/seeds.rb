# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

recipes = Recipe.create([
    {
        name: "Boeuf bourguignon facile",
        author: "Mamie",
        preparation_time: "20",
        cooking_time: "60",
        image_url: "https://odelices.ouest-france.fr/images/recettes/boeuf-bourguignon.jpg",
        steps: ["A feu doux, faire revenir les oignons...","Déglacer au vin rouge."]
    },
    {
        name: "Gaufres à la bière",
        author: "Maman Michèle",
        preparation_time: "10",
        cooking_time: "20",
        image_url: "https://www.krups.fr/medias/?context=bWFzdGVyfHJvb3R8OTUzMDN8aW1hZ2UvanBlZ3xoYzQvaGMzLzE1NjIyMTY4OTM2NDc4LmpwZ3w4ZmY1Yjk2NDA4ZTk1NTQ4MjEwNDA1NGExZTdkZWIwNWI0NjRlNGFiNTRkNjIzMDBlZTJjZmQyMDM0YjBiZDU3",
        steps: ["Une bière pour la pâte","Une bière pour le cuistot!"]
    },
    {
        name: "Forêt noire",
        author: "Les enfants",
        preparation_time: "60",
        cooking_time: "60",
        image_url: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F06.2F08.2F9ecf8e58-65e9-4e50-af3d-bc723292d06b.2Ejpeg/850x478/quality/90/crop-from/center/foret-noire.jpeg",
        steps: ["Allez vous chercher une verre de kirch","Commencez la génoise."]
    },
    {
        name: "Foie gras maison",
        author: "Maman Michèle",
        preparation_time: "60",
        cooking_time: "60",
        image_url: "https://img-3.journaldesfemmes.fr/aodE3VGgUOGlLLT29-N0a7yDIiw=/1500x/smart/bc31452e1a594c6b865626b141401544/ccmcms-jdf/29866922.jpg",
        steps: ["Secret défense, personne ne saura jamais."]
    }
])

comments = Comment.create([
    {
        title: "J'ai pris 3 kilos",
        body: "Tellement bon que je n'arrivais pas à m'arrêter. Je suis même repartie avec des tupp' !",
        author: "Charlotte",
        recipe: recipes.first
    },
    {
        title: "Ch'étais chuper bon... hic !",
        body: "Plus de bière, on a mis d'la mirabelle... hic !",
        author: "Papa",
        recipe: recipes.second
    },
    {
        title: "LA gaufre du siècle",
        body: "J'ai trouvé le combo ultime : nutella, sucre glace, compote de mamie, camembert et copeaux d'amandes grillées dans du beurre. Simple, mais exceptionnel !",
        author: "Victor",
        recipe: recipes.second
    }
])

units = Unit.create([
    {
        name: "Unité arbitraire",
        abbreviation: "",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVF_FjFT0WOcN6WBHL1jJRPBNA4DxkXwlpXg&usqp=CAU"
    },
    {
        name: "Gramme",
        abbreviation: "g",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVF_FjFT0WOcN6WBHL1jJRPBNA4DxkXwlpXg&usqp=CAU"
    },
    {
        name: "Litre",
        abbreviation: "g",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJcK3XpLGEn0XMJAAZjo5YkVAy3htdTm46w&usqp=CAU"
    },
    {
        name: "Cuillère à café",
        abbreviation: "c. à c.",
        image_url: "https://i2.wp.com/www.digital-pharmacie.ma/wp-content/uploads/2015/05/cuillere-maroc-pharmacie.jpg?ssl=1"
    },
    {
        name: "Cuillère à soupe",
        abbreviation: "c. à s.",
        image_url: "https://recette.supertoinette.com/68665/s/.jpg"
    }
])

ingredients = Ingredient.create([
    {
        name: "Farine",
        image_url: "https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2017/01/farine.jpg",
        unit: units.second
    },
    {
        name: "Farine",
        image_url: "https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2017/01/farine.jpg",
        unit: units[5]
    },
    {
        name: "Oeuf",
        image_url: "https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2020-03/oeufs.jpg",
        unit: units.first
    },
    {
        name: "Lait",
        image_url: "https://www.noovomoi.ca/content/dam/style-de-vie/uploadImg/2021/3/17/124655_Lait.jpg",
        unit: units.third
    },
    {
        name: "Chocolat noir",
        image_url: "https://www.indexsante.ca/chroniques/images/chocolat-noir.jpg",
        unit: units.second
    }    
])

ingredients_recipes = IngredientsRecipe.create([
    {
        recipe: Recipe.find(1),
        ingredient: Ingredient.find(1),
        quantity: "500"
    },
    {
        recipe: Recipe.find(1),
        ingredient: Ingredient.find(3),
        quantity: "150"
    },
    {
        recipe: Recipe.find(2),
        ingredient: Ingredient.find(4),
        quantity: "2"
    },
    {
        recipe: Recipe.find(2),
        ingredient: Ingredient.find(3),
        quantity: "112"
    },
    {
        recipe: Recipe.find(3),
        ingredient: Ingredient.find(2),
        quantity: "1000"
    },
    {
        recipe: Recipe.find(4),
        ingredient: Ingredient.find(3),
        quantity: "200"
    }
])

# Recipe.find(1).ingredients << Ingredient.find_by(name: "Oeuf")
# Recipe.find(1).ingredients << Ingredient.find_by(name: "Farine")
# Recipe.find(1).ingredients << Ingredient.find_by(name: "Chocolat noir")
# Recipe.find(2).ingredients << Ingredient.find_by(name: "Lait")
# Recipe.find(2).ingredients << Ingredient.find_by(name: "Oeuf")
# Recipe.find(3).ingredients << Ingredient.find_by(name: "Farine")
# Recipe.find(4).ingredients << Ingredient.find_by(name: "Chocolat noir")
