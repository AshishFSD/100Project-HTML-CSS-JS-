

 class calculator{
      constructor( previousText, currentText){
           this.previousText =previousText;
           this.currentText =currentText;

           this.clear();
      }


      clear(){
          this.previousText ='';
          this.currentText ='';
          this.operation = undefined;
      }
 }






 const numberButton = document.querySelectorAll('[data-number]');
 const operation = document.querySelectorAll('[data-operation]');

 // Indivusal value 
 const equal = document.querySelector('[data-equal]');
 const allClear = document.querySelector('[data-allclear]');
 const deleteButton= document.querySelector('[data-delete  ]');
 const previousText = document.querySelector('[data-previous]');
 const currentText = document.querySelector('[data-current]');



 

  console.log(equal, allClear, deleteButton ,previousText,currentText);
 

  // cre