export type Product={id:number;name:string;carat:string;metal:string;price:number;color:string;kind:string;badge?:string;sprite:number;sheet?:'electric';description:string};
export const products:Product[]=[
{id:1,name:'Blue Lab Diamond Bezel Ring',carat:'0.35 ct',metal:'18k Gold-Plated Sterling Silver',price:395,color:'Blue',kind:'Ring',badge:'NEW',sprite:0,description:'A vivid blue lab-grown diamond in a clean, low-profile bezel, made for effortless daily wear.'},
{id:2,name:'Rainbow Arc Huggies',carat:'0.28 ct',metal:'18k Gold-Plated Sterling Silver',price:295,color:'Rainbow',kind:'Earrings',badge:'BESTSELLER',sprite:1,description:'A joyful spectrum of lab-grown diamonds, set into close-fitting golden hoops.'},
{id:3,name:'Seven-Stone Station Bracelet',carat:'0.70 ct',metal:'Sterling Silver',price:495,color:'White',kind:'Bracelet',sprite:2,description:'Seven bright diamonds punctuate a fine silver chain with quiet brilliance.'},
{id:4,name:'Pink Diamond Heart Charm',carat:'0.20 ct',metal:'18k Gold-Plated Sterling Silver',price:195,color:'Pink',kind:'Charm',badge:'NEW',sprite:3,description:'A playful pink heart made to add to your favourite chain or charm stack.'},
{id:5,name:'Yellow Diamond Star Pendant',carat:'0.30 ct',metal:'18k Gold-Plated Sterling Silver',price:345,color:'Yellow',kind:'Pendant',sprite:4,description:'A tiny golden star with a sunlit yellow diamond at its centre.'},
{id:6,name:'Dainty Diamond Stacking Ring',carat:'0.15 ct',metal:'Sterling Silver',price:195,color:'White',kind:'Ring',sprite:5,description:'A fine line of light designed to wear solo or layer into your own stack.'},
{id:7,name:'Mismatched Studs',carat:'0.18 ct',metal:'18k Gold-Plated Sterling Silver',price:155,color:'Rainbow',kind:'Earrings',sprite:6,description:'Two deliberately different clusters of colourful diamonds.'},
{id:8,name:'Sculptural Statement Ring',carat:'0.22 ct',metal:'Recycled Sterling Silver',price:245,color:'White',kind:'Ring',sprite:7,description:'A fluid silver form with a discreet diamond detail and an artful silhouette.'},
{id:10,name:'Blue Diamond Teardrop Necklace',carat:'0.40 ct',metal:'Sterling Silver',price:395,color:'Blue',kind:'Necklace',sprite:9,description:'A cool blue pear-cut diamond suspended from a delicate sterling-silver chain.'},
{id:11,name:'Yellow Diamond Drop Huggies',carat:'0.32 ct',metal:'18k Gold-Plated Sterling Silver',price:295,color:'Yellow',kind:'Earrings',badge:'NEW',sprite:10,description:'Fine hoops finished with a pair of sunny yellow diamond drops.'},
{id:12,name:'Rainbow Diamond Band',carat:'0.45 ct',metal:'18k Gold-Plated Sterling Silver',price:495,color:'Rainbow',kind:'Ring',badge:'BESTSELLER',sprite:11,description:'A full spectrum of lab-grown colour, made to anchor a joyful ring stack.'},
{id:101,name:'Vine Marquise Ring',carat:'0.48 ct',metal:'18k Gold-Plated Sterling Silver',price:465,color:'Green',kind:'Ring',badge:'NEW',sprite:0,sheet:'electric',description:'A fine golden vine set with vivid green marquise-cut diamonds, winding naturally around the finger.'},
{id:102,name:'Pink Bloom Studs',carat:'0.36 ct',metal:'Sterling Silver',price:325,color:'Pink',kind:'Earrings',badge:'NEW',sprite:1,sheet:'electric',description:'Bright pear-cut pink diamonds open into a playful pair of tiny flowers.'},
{id:103,name:'Electric Leaf Pendant',carat:'0.52 ct',metal:'Sterling Silver',price:445,color:'Blue',kind:'Necklace',badge:'BESTSELLER',sprite:2,sheet:'electric',description:'Electric-blue marquise diamonds trace a fluid sterling-silver leaf on a delicate chain.'},
{id:104,name:'Climbing Garden Ear Cuff',carat:'0.31 ct',metal:'18k Gold-Plated Sterling Silver',price:275,color:'Rainbow',kind:'Earrings',sprite:3,sheet:'electric',description:'A colourful trail of tiny diamond leaves designed to climb the ear without a piercing.'},
{id:105,name:'Sun Diamond Charm',carat:'0.42 ct',metal:'18k Gold-Plated Sterling Silver',price:295,color:'Yellow',kind:'Charm',sprite:4,sheet:'electric',description:'A pocket-sized burst of sunshine, articulated in yellow lab-grown diamonds.'},
{id:106,name:'Blue Garden Line Bracelet',carat:'1.10 ct',metal:'Sterling Silver',price:695,color:'Blue Green',kind:'Bracelet',sprite:5,sheet:'electric',description:'Alternating blue and green diamonds create a cool ribbon of colour around the wrist.'},
{id:107,name:'Violet Orchid Ring',carat:'0.38 ct',metal:'Recycled Sterling Silver',price:285,color:'Violet',kind:'Ring',sprite:6,sheet:'electric',description:'A hand-finished silver orchid curls around a pear-shaped violet lab-grown diamond.'},
{id:108,name:'Rainbow Garden Huggies',carat:'0.40 ct',metal:'18k Gold-Plated Sterling Silver',price:345,color:'Rainbow',kind:'Earrings',sprite:7,sheet:'electric',description:'A joyful garden of coloured diamonds set into polished everyday hoops.'}
];
export const collections=[
{name:'New & Noted',desc:'The newest ASTRELI pieces, selected for first discovery.',cover:101,ids:[101,102,1,4,11,107]},
{name:'Colour Theory',desc:'A joyful spectrum of blue, pink, yellow and rainbow lab-grown diamonds.',cover:2,ids:[1,2,4,5,7,10,11,12]},
{name:'Electric Garden',desc:'Botanical forms come alive in vivid, electric diamond colour.',cover:103,ids:[101,102,103,104,105,106,107,108]},
{name:'Everyday Icons',desc:'Clean, versatile silhouettes designed to become daily signatures.',cover:3,ids:[1,2,3,6,8,10]},
{name:'Ring Stories',desc:'Fine bands and sculptural forms made to wear solo or stack together.',cover:12,ids:[1,6,8,12,101,107]},
{name:'Tokens & Charms',desc:'Small symbols with personal meaning and genuine diamond brilliance.',cover:4,ids:[4,5,105]},
{name:'Gifts Under €350',desc:'Considered diamond pieces for celebrating beautifully, all under €350.',cover:102,ids:[2,4,5,6,7,8,11,102,104,105,107,108]}
];
