export type Product={id:number;name:string;carat:string;metal:string;price:number;color:string;kind:string;badge?:string;sprite:number;description:string};
export const products:Product[]=[
{id:1,name:'Blue Lab Diamond Bezel Ring',carat:'0.35 ct',metal:'14k Yellow Gold',price:395,color:'Blue',kind:'Ring',badge:'NEW',sprite:0,description:'A vivid blue lab-grown diamond in a clean, low-profile bezel, made for effortless daily wear.'},
{id:2,name:'Rainbow Arc Huggies',carat:'0.28 ct',metal:'14k Yellow Gold',price:295,color:'Rainbow',kind:'Earrings',badge:'BESTSELLER',sprite:1,description:'A joyful spectrum of lab-grown diamonds, set into close-fitting golden hoops.'},
{id:3,name:'Seven-Stone Station Bracelet',carat:'0.70 ct',metal:'14k Yellow Gold',price:495,color:'White',kind:'Bracelet',sprite:2,description:'Seven bright diamonds punctuate a fine gold chain with quiet brilliance.'},
{id:4,name:'Pink Diamond Heart Charm',carat:'0.20 ct',metal:'14k Yellow Gold',price:195,color:'Pink',kind:'Charm',badge:'NEW',sprite:3,description:'A playful pink heart made to add to your favourite chain or charm stack.'},
{id:5,name:'Yellow Diamond Star Pendant',carat:'0.30 ct',metal:'14k Yellow Gold',price:345,color:'Yellow',kind:'Pendant',sprite:4,description:'A tiny golden star with a sunlit yellow diamond at its centre.'},
{id:6,name:'Dainty Diamond Stacking Ring',carat:'0.15 ct',metal:'14k White Gold',price:195,color:'White',kind:'Ring',sprite:5,description:'A fine line of light designed to wear solo or layer into your own stack.'},
{id:7,name:'Mismatched Studs',carat:'0.18 ct',metal:'14k Yellow Gold',price:155,color:'Rainbow',kind:'Earrings',sprite:6,description:'Two deliberately different clusters of colourful diamonds.'},
{id:8,name:'Sculptural Statement Ring',carat:'0.22 ct',metal:'Recycled Silver',price:245,color:'White',kind:'Ring',sprite:7,description:'A fluid silver form with a discreet diamond detail and an artful silhouette.'},
{id:10,name:'Blue Diamond Teardrop Necklace',carat:'0.40 ct',metal:'14k White Gold',price:395,color:'Blue',kind:'Necklace',sprite:9,description:'A cool blue pear-cut diamond suspended from a delicate white-gold chain.'},
{id:11,name:'Yellow Diamond Drop Huggies',carat:'0.32 ct',metal:'14k Yellow Gold',price:295,color:'Yellow',kind:'Earrings',badge:'NEW',sprite:10,description:'Fine hoops finished with a pair of sunny yellow diamond drops.'},
{id:12,name:'Rainbow Diamond Band',carat:'0.45 ct',metal:'14k Yellow Gold',price:495,color:'Rainbow',kind:'Ring',badge:'BESTSELLER',sprite:11,description:'A full spectrum of lab-grown colour, made to anchor a joyful ring stack.'}
];
export const collections=[
{name:'New In',desc:'Freshly released pieces for your growing collection.',ids:[1,4,11,2,5,7]},
{name:'Colour Pop',desc:'12 playful pieces featuring colourful lab-grown diamonds.',ids:[1,2,3,4,5,6,7,8,9,10,11,12]},
{name:'Lucky Symbols',desc:'Bright little talismans to wear your way.',ids:[4,5,7,10]},
{name:'Stacking Rings',desc:'Fine bands designed to combine, contrast and collect.',ids:[1,6,8,12]},
{name:'Diamond Charms',desc:'Personal symbols with genuine diamond brilliance.',ids:[4,5,10]},
{name:'Gifts',desc:'Considered pieces for someone worth celebrating.',ids:[2,3,4,5,7,10]}
];
