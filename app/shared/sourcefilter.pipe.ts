import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sourceFilter'
})

export class sourceFilter implements PipeTransform {
   
    public regexp: RegExp;
    public inputsource : string;
    transform(value: any, args: any[]): any {
        
        if(!args[0]){
            alert(args[0]);
        return value;    
    }else{
        this.inputsource = args.toString();
        this.regexp= new RegExp(this.inputsource);
        return value.filter(item=>{if(this.regexp.test(item.toLowerCase())){return true;}else{return false;}});
        }
    }
}