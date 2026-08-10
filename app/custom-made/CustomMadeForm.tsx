'use client';
import {FormEvent,useState} from 'react';
import {ArrowUpRight,Upload} from 'lucide-react';

export default function CustomMadeForm(){
 const [file,setFile]=useState('');
 const [opened,setOpened]=useState(false);
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const lines=[`Name: ${form.get('name')||''}`,`Email: ${form.get('email')||''}`,`Type: ${form.get('type')||''}`,`Metal: ${form.get('metal')||''}`,`Diamond direction: ${form.get('diamond')||''}`,`Budget: ${form.get('budget')||''}`,`Inspiration link: ${form.get('link')||'None'}`,`Inspiration file to attach: ${file||'None'}`,'','Idea:',String(form.get('idea')||'')];
  setOpened(true);
  window.location.href=`mailto:hello@astreli.com?subject=${encodeURIComponent('ASTRELI custom-made enquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
 }
 return <form className="custom-form" onSubmit={submit}>
  <div className="custom-fields"><label>YOUR NAME<input required name="name" autoComplete="name"/></label><label>EMAIL ADDRESS<input required name="email" type="email" autoComplete="email"/></label></div>
  <div className="custom-fields"><label>PIECE<select name="type" defaultValue="Ring"><option>Ring</option><option>Earrings</option><option>Pendant or necklace</option><option>Bracelet</option><option>Charm</option><option>Something else</option></select></label><label>METAL<select name="metal" defaultValue="925 sterling silver"><option>925 sterling silver</option><option>18k gold-plated sterling silver</option><option>Not sure yet</option></select></label></div>
  <div className="custom-fields"><label>DIAMOND DIRECTION<select name="diamond" defaultValue="White lab-grown diamonds"><option>White lab-grown diamonds</option><option>Coloured lab-grown diamonds</option><option>A mix of white and colour</option><option>Help me choose</option></select></label><label>INDICATIVE BUDGET<select name="budget" defaultValue="€300–€600"><option>€200–€300</option><option>€300–€600</option><option>€600–€1,000</option><option>€1,000+</option><option>I need guidance</option></select></label></div>
  <label>INSPIRATION LINK <span>OPTIONAL</span><input name="link" type="url" placeholder="Pinterest, Instagram or another link"/></label>
  <label className="custom-upload"><Upload/><b>{file||'ADD AN INSPIRATION IMAGE'}</b><span>JPG, PNG or PDF · attach it when your email opens</span><input type="file" accept="image/jpeg,image/png,application/pdf" onChange={event=>setFile(event.target.files?.[0]?.name||'')}/></label>
  <label>TELL US ABOUT YOUR IDEA<textarea required name="idea" rows={6} placeholder="The piece, meaning, colours, size or details you have in mind..."/></label>
  <button className="custom-submit">OPEN MY ENQUIRY <ArrowUpRight/></button><p className="custom-privacy">Your email application will open with the details prepared. If you selected an image, attach it before sending.{opened&&' Your enquiry is ready in your email application.'}</p>
 </form>
}
