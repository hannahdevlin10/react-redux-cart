import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Guinness World Records 2022",
      author: "Guinness World Records", 
      genre: 'Yearbook',
      description:
        "Fully revised and updated, Guinness World Records 2022 provides a fascinating snapshot of our world today, and the perfect gift for Christmas! Some of the record-packed features in this year’s edition include: ‘Environmental champions,’ the eco-warriors fighting to make our planet a better place. ‘The tallest and shortest…’ measuring a host of the world’s loftiest and diminutive humans. ‘Pop Culture icons,’ we reveal the world’s most successful movie franchises, videogames, toys and brands. ‘Young Achievers,’ meet the under 16-year-old influencers, entrepreneurs and entertainers who are taking positive steps to change the world. Additionally, look out for bonus features including more inductees into the Guinness World Records Hall of Fame, such as Sir David Attenborough, and K-Pop sensations BTS; and “Virtual Visits” that take you on a journey to some of the most fascinating and record-packed visitor attractions, museums, and parks!",
      price: 9.45,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61m9zQRJpAS._SX371_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "The Man Who Died Twice",
      author: "Richard Osman",
      genre: "Crime",
      description:
        "The second novel in the record-breaking, million-copy bestselling Thursday Murder Club series by Richard Osman. It's the following Thursday. Elizabeth has received a letter from an old colleague, a man with whom she has a long history. He’s made a big mistake, and he needs her help. His story involves stolen diamonds, a violent mobster, and a very real threat to his life. As bodies start piling up, Elizabeth enlists Joyce, Ibrahim and Ron in the hunt for a ruthless murderer. And if they find the diamonds too? Well, wouldn't that be a bonus?But this time they are up against an enemy who wouldn't bat an eyelid at knocking off four septuagenarians. Can The Thursday Murder Club find the killer (and the diamonds) before the killer finds them?",
      price: 10.55,
      image:
        "https://www.easons.com/globalassets/book-covers/2021-03/manwhodiedtwice_cover.png?width=251&height=389&mode=max",
    },
    {
      id: 3,
      title: "Diddly Squat",
      author: "Jeremy Clarkson",
      genre: "Humour",
      description:
        "Pull on your wellies, grab your flat cap and join Jeremy Clarkson in this hilarious and fascinating behind-the-scenes look at the farm we're all obsessed with.",
      price: 12.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51LHUNNIk1L._SX323_BO1,204,203,200_.jpg",
      },
      {
        id: 4,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        genre: "Mystery",
        description:
          "Four septuagenarians with a few tricks up their sleeves. A female cop with her first big case. A brutal murder. Welcome to… The Thursday Murder Club. In a peaceful retirement village, four unlikely friends meet weekly in the Jigsaw Room to discuss unsolved crimes; together they call themselves The Thursday Murder Club. Elizabeth, Joyce, Ibrahim and Ron might be pushing eighty but they still have a few tricks up their sleeves. When a local developer is found dead with a mysterious photograph left next to the body, the Thursday Murder Club suddenly find themselves in the middle of their first live case. As the bodies begin to pile up, can our unorthodox but brilliant gang catch the killer, before it’s too late? ",
        price: 6.00,
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582287822l/46000520.jpg",
    },
    {
        id: 5,
        title: "Pinch of Nom Comfort Food",
        author: "Kay Featherstone, Kate Allinson",
        genre: "Food",
        description:
          "From satisfying savoury dishes to indulgent desserts, Pinch of Nom Comfort Food is packed with slimming-friendly, delicious dishes that will keep you and your loved ones happy and healthy. From lazy weekend breakfasts to filling mains and warming puddings, this book is brimming with tasty meals that are easy to make. Many of the dishes have alternative cooking methods, so you can choose whether to cook in the oven, slow cooker or pressure cooker, depending on your schedule.",
        price: 11.25,
        image:
          "https://www.easons.com/globalassets/5637150827/all/books/home/food-drink/general-cook-books/9781529035018.jpg?width=251&height=389&mode=max",
    },
    {
        id: 6,
        title: "Windswept & Interesting",
        author: "Billy Connolly",
        genre: "Autobiography",
        description:
          "Windswept and Interesting is Billy's story in his own words. It is joyfully funny - stuffed full of hard-earned wisdom as well as countless digressions on fishing, farting and the joys of dancing naked. It is an unforgettable, life-affirming story of a true comedy legend.",
        price: 18.95,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41vyzaJnkRS._SX323_BO1,204,203,200_.jpg",
    },
    {
        id: 7,
        title: "Together: Memorable Meals",
        author: "Jamie Oliver",
        genre: "Food",
        description:
          "Being with our loved ones has never felt so important, and great food is the perfect excuse to get together. Each chapter features a meal - from Curry Night to Last-Minute Feast, Garden Lunch to Autumnal Fare - with a simple, achievable menu that can be mostly prepped ahead.",
        price: 15.95,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/515rLqYLcoL._SX366_BO1,204,203,200_.jpg",
    },
    {
        id: 8,
        title: "The Night She Disappeared",
        author: "Lisa Jewell",
        genre: "Mystery",
        description:
          "2017: 19-year-old Tallulah is going out on a date, leaving her baby with her mother, Kim. Kim watches her daughter leave, and, as late evening turns into night, which turns into early morning, she waits for her return. And waits. The next morning, Kim phones Tallulah's friends, who tell her that Tallulah was last seen heading to a party at a house in the nearby woods called Dark Place. She never returns. 2019: Sophie is walking in the woods near the boarding school where her boyfriend has just started work as a head teacher when she sees a note fixed to a tree. 'DIG HERE' - A cold case, an abandoned mansion, family trauma and dark secrets lie at the heart of Lisa Jewell's remarkable new novel.",
        price: 5.55,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51T8qs8LlsL._SX324_BO1,204,203,200_.jpg",
    },
    {
        id: 9,
        title: "Come Hell or High Water",
        author: "JD Kirk",
        genre: "Mystery",
        description:
          "When a badly burned body is found near the remote Ardnamurchan Lighthouse on the west coast of Scotland, it feels like just another day on the job for DCI Jack Logan and his team. But the victim’s list of enemies―including a diminutive loan shark and a powerful local politician―is far longer than Jack was prepared for. And don’t even get him started on the magic psychic sex cult. With political scandal brewing, conspiracy theories running wild, and a team member stuck inside a giant road safety squirrel costume, DCI Logan’s latest case might just be his most bizarre to date.",
        price: 4.95,
        image:
          "https://m.media-amazon.com/images/I/419ifh6LUNL.jpg",
    },
    {
        id: 10,
        title: "And Away...",
        author: "Bob Mortimer",
        genre: "Autobiography",
        description:
          "Bob Mortimer’s life was trundling along happily until suddenly in 2015 he was diagnosed with a heart condition that required immediate surgery and forced him to cancel an upcoming tour. The episode unnerved him, but forced him to reflect on his life so far. This is the framework for his hilarious and moving memoir, And Away… . Although his childhood in Middlesbrough was normal on the surface, it was tinged by the loss of his dad, and his own various misadventures (now infamous from his appearances on Would I Lie to You?), from burning down the family home to starting a short-lived punk band called Dog Dirt. As an adult, he trained as a solicitor and moved to London. Though he was doing pretty well (the South London Press once crowned him ‘The Cockroach King’ after a successful verdict), a chance encounter in a pub in the 1980s with a young comedian going by the name Vic Reeves set his life on a different track. And now, six years on, the heart condition that once threatened his career has instead led to new success on BBC2’s Gone Fishing. Warm, profound, and irrepressibly funny, And Away… is Bob’s full life story (with a few lies thrown in for good measure.)",
        price: 11.75,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51vrcI96kML._SX321_BO1,204,203,200_.jpg",
    },
    {
        id: 11,
        title: "Call Us What We Carry",
        author: "Amanda Gorman",
        genre: "Poetry",
        description:
          "Including 'The Hill We Climb,' the stirring poem read at the inauguration of the 46th President of the United States, Joe Biden, this luminous poetry collection by Amanda Gorman captures a shipwrecked moment in time and transforms it into a lyric of hope and healing. In Call Us What We Carry, Gorman explores history, language, identity, and erasure through an imaginative and intimate collage. Harnessing the collective grief of a global pandemic, these seventy poems shine a light on a moment of reckoning and reveal that Gorman has become our messenger from the past, our voice for the future.",
        price: 14.55,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51R-sgzTUcL._SX309_BO1,204,203,200_.jpg",
    },
    {
        id: 12,
        title: "False Witness",
        author: "Karin Slaughter",
        genre: "Thriller",
        description:
          "The stunning new thriller from the No. 1 Sunday Times bestselling author. Two sisters. One secret. Someone knows what they did… . Leigh doesn’t like to talk about her sister. About the night that tore them apart. About what they did. But someone else is about to. How far will Leigh go to protect her family?",
        price: 5.95,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51sgsPcTFwL._SX324_BO1,204,203,200_.jpg",
    },
    {
        id: 13,
        title: "The Treaty",
        author: "Gretchen Friemann",
        genre: "History",
        description:
          "So began the first day of the most important political negotiations in modern Anglo-Irish history. Nearly two months later, in the early hours of 6 December 1921, the talks culminated in the signing of what in Ireland is known simply as ‘the Treaty’ – a document that had been designed to end one violent conflict, but which soon gave rise to another. A century on from its signing, award-winning journalist Gretchen Friemann has produced a gripping account of the tense and protracted negotiations between the Irish and British delegations, shining a fresh light on the complex politics and high-stakes bargaining that produced the agreement. A stunningly vivid piece of narrative history that resonates across the intervening century to the age of Brexit, The Treaty is a must-read for anyone who wishes to understand modern Ireland and the enduring complexities of British–Irish relations.",
        price: 14.95,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41cRxGz2ozL._SX324_BO1,204,203,200_.jpg",
    },
    {
        id: 14,
        title: "Death of a Naturalist",
        author: "Seamus Heaney",
        genre: "Poetry",
        description:
          "For the fortieth anniversary of its publication, in May 2006, Faber are reissuing Seamus Heaney's classic first collection, Death of a Naturalist, which on its appearance in 1966 won the Cholmondeley Award, the E.C. Gregory Award, the Somerset Maugham Award and the Geoffrey Faber Memorial Prize.",
        price: 10.95,
        image:
          "https://images-eu.ssl-images-amazon.com/images/I/31dHmYobUZL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    },
  ],
  cart: [],
  currentItem: null,
  selectedOption: null,
  selectedBrand: null,
  selectedFilter: 'Title'
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.SET_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    case actionTypes.SET_SELECTED_FILTER:
      return {
        ...state,
        selectedFilter: action.payload,
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default shopReducer;