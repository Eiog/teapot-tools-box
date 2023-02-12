declare module 'uview-plus'{
  export type install = ()=>void
  export type $Refs = {
    uToast:{
      show:(options:{loading?:boolean,message:string|number,icon?:string,position?:'center'|'top'|'bottom',type?:'default'|'success'|'loading'|'error',params?:{},duration?:number,complete?:void})=>void
    }
  }
}

