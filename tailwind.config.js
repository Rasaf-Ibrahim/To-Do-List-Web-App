//version 2.9


module.exports = {
  mode: 'jit',

darkMode: 'class', // or 'media',

  
/* Never add '.css' file on the purge list. It will be a huge mistake, specially when you have created many classes manually. If you add '.css' file on the purge list, then all the classes that you have manually created will be added on the production css file, that will make the size of the production css file huge! */


// Purge configuration for a 11ty project
// purge: [

//   './src/*.{html,liquid,njk,js}', 
//   './src/**/*.{html,liquid,njk,js}',
//   './src/**/**/*.{html,liquid,njk,js}',
//   './src/**/**/**/*.{html,liquid,njk,js}',
//   './src/**/**/**/**/*.{html,liquid,njk,js}',
//   './src/**/**/**/**/**/*.{html,liquid,njk,js}'


// ],

// Purge configuration for a React Project

purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './index.html'],


  // Purge configuration for a Vue project


  // purge: [
  //     './index.html',
  //     './src/index.html',
  //     './src/**/*.{html,js,ts,jsx,tsx,vue}'
  //   ],


  // Purge configuration for a Nuxt project

  // purge: [
  //     `components/**/*.{vue,js}`,
  //     `layouts/**/*.vue`,
  //     `pages/**/*.vue`,
  //     `plugins/**/*.{js,ts}`,
  //     `nuxt.config.{js,ts}`
  //   ],
  


      // /* **padding,margin,height,width** */






  theme: {


    /*  
    
    --- TABLE OF CONTENTS ---   (Search with following keywords)
   
   
   
     **backgroundColor**
   
     **textColor**
   
     **borderColor**

     **ringColor**

     **placeholderColor**
   
     **breakpoints**
   
     **fontFamily**
 
     **BorderRadius**  (Rounded Corners)
   
     *** maxWidth  ***
   
     *** minHeight  ***
   
    
   
   
   
   
    */





    /* **breakpoints** */

    screens: {
      'sm': '640px',

      'md': '640px',

      'lg': '960px',

      'xl': '1280px',

      '2xl': '1600px',


      //  (320x2) = 640px
      //  (320x3) = 960px
      //  (320x4) = 1280px
      //  (320x5)=  1600px


      /* According to tailwind CSS documentation, sm and md breakpoints are respectively  640px and 768px. That means the values of sm and md breakpoints are close. I don't want separate values for sm and md breakpoints. So, using same value for both sm and md breakpoint.*/


      /* We have defined style for breakpoints is in the 'theme.screens' section of our tailwind.config.js file. Because we don't want to extend breakpoints style. But we will extend every other style. */



    },





    extend: {

      /* **backgroundColor** */

      backgroundColor: {

        //  surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
    


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
     

        },



        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',
          t1l1a4: 'var(--brand-type-1-layer-1-alpha-4)',


          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',
          t1l2a4: 'var(--brand-type-1-layer-2-alpha-4)',





          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',
          t2l1a4: 'var(--brand-type-2-layer-1-alpha-4)',


          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',
          t2l2a4: 'var(--brand-type-2-layer-2-alpha-4)',

        },


        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',
          l1a4: 'var(--red-layer-1-alpha-4)',



          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',
          l2a4: 'var(--red-layer-2-alpha-4)',

        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',
          l1a4: 'var(--green-layer-1-alpha-4)',



          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',
          l2a4: 'var(--green-layer-2-alpha-4)',

        },


         blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',
          l1a4: 'var(--blue-layer-1-alpha-4)',



          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',
          l2a4: 'var(--blue-layer-2-alpha-4)',

        },


        gray: {

          l1a1: 'var(--gray-layer-1-alpha-1)',
          l1a2: 'var(--gray-layer-1-alpha-2)',
          l1a3: 'var(--gray-layer-1-alpha-3)',
          l1a4: 'var(--gray-layer-1-alpha-4)',


          l2a1: 'var(--gray-layer-2-alpha-1)',
          l2a2: 'var(--gray-layer-2-alpha-2)',
          l2a3: 'var(--gray-layer-2-alpha-3)',
          l2a4: 'var(--gray-layer-2-alpha-4)',

        },



      },



      /* **textColor** */

      textColor: {

        //  default color

        l1: {

          a1: 'var(--layer-1-alpha-1)',
          a2: 'var(--layer-1-alpha-2)',
          a3: 'var(--layer-1-alpha-3)',

        },


        l2: {

          a1: 'var(--layer-2-alpha-1)',
          a2: 'var(--layer-2-alpha-2)',
          a3: 'var(--layer-2-alpha-3)',

        },




        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',
          t1l1a4: 'var(--brand-type-1-layer-1-alpha-4)',


          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',
          t1l2a4: 'var(--brand-type-1-layer-2-alpha-4)',




          
          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',
          t2l1a4: 'var(--brand-type-2-layer-1-alpha-4)',


          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',
          t2l2a4: 'var(--brand-type-2-layer-2-alpha-4)',

        },






      //  specific color

      red: {

        l1a1: 'var(--red-layer-1-alpha-1)',
        l1a2: 'var(--red-layer-1-alpha-2)',
        l1a3: 'var(--red-layer-1-alpha-3)',
        l1a4: 'var(--red-layer-1-alpha-4)',



        l2a1: 'var(--red-layer-2-alpha-1)',
        l2a2: 'var(--red-layer-2-alpha-2)',
        l2a3: 'var(--red-layer-2-alpha-3)',
        l2a4: 'var(--red-layer-2-alpha-4)',
    
      },


      green: {

        l1a1: 'var(--green-layer-1-alpha-1)',
        l1a2: 'var(--green-layer-1-alpha-2)',
        l1a3: 'var(--green-layer-1-alpha-3)',
        l1a4: 'var(--green-layer-1-alpha-4)',



        l2a1: 'var(--green-layer-2-alpha-1)',
        l2a2: 'var(--green-layer-2-alpha-2)',
        l2a3: 'var(--green-layer-2-alpha-3)',
        l2a4: 'var(--green-layer-2-alpha-4)',

      },


       blue: {

        l1a1: 'var(--blue-layer-1-alpha-1)',
        l1a2: 'var(--blue-layer-1-alpha-2)',
        l1a3: 'var(--blue-layer-1-alpha-3)',
        l1a4: 'var(--blue-layer-1-alpha-4)',



        l2a1: 'var(--blue-layer-2-alpha-1)',
        l2a2: 'var(--blue-layer-2-alpha-2)',
        l2a3: 'var(--blue-layer-2-alpha-3)',
        l2a4: 'var(--blue-layer-2-alpha-4)',

      },


      gray: {

        l1a1: 'var(--gray-layer-1-alpha-1)',
        l1a2: 'var(--gray-layer-1-alpha-2)',
        l1a3: 'var(--gray-layer-1-alpha-3)',
        l1a4: 'var(--gray-layer-1-alpha-4)',

        l2a1: 'var(--gray-layer-2-alpha-1)',
        l2a2: 'var(--gray-layer-2-alpha-2)',
        l2a3: 'var(--gray-layer-2-alpha-3)',
        l2a4: 'var(--gray-layer-2-alpha-4)',

      },







        //  surface color  (Just for SVG)

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
       


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
    

        },



      },


      /* **borderColor** */

      borderColor: {


        // surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
   


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
     

        },



        //  brand color

        brand: {
          /* can't name it 'b'. Because that  will clash with 'border bottom'. So, we've named it 'brand' instead of 'b' */

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',
          t1l1a4: 'var(--brand-type-1-layer-1-alpha-4)',


          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',
          t1l2a4: 'var(--brand-type-1-layer-2-alpha-4)',




          
          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',
          t2l1a4: 'var(--brand-type-2-layer-1-alpha-4)',


          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',
          t2l2a4: 'var(--brand-type-2-layer-2-alpha-4)',

        },




        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',
          l1a4: 'var(--red-layer-1-alpha-4)',



          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',
          l2a4: 'var(--red-layer-2-alpha-4)',

        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',
          l1a4: 'var(--green-layer-1-alpha-4)',



          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',
          l2a4: 'var(--green-layer-2-alpha-4)',

        },


         blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',
          l1a4: 'var(--blue-layer-1-alpha-4)',



          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',
          l2a4: 'var(--blue-layer-2-alpha-4)',

        },


        gray: {

          l1a1: 'var(--gray-layer-1-alpha-1)',
          l1a2: 'var(--gray-layer-1-alpha-2)',
          l1a3: 'var(--gray-layer-1-alpha-3)',
          l1a4: 'var(--gray-layer-1-alpha-4)',



          l2a1: 'var(--gray-layer-2-alpha-1)',
          l2a2: 'var(--gray-layer-2-alpha-2)',
          l2a3: 'var(--gray-layer-2-alpha-3)',
          l2a4: 'var(--gray-layer-2-alpha-4)',

        },






       

      },




       /* **ringColor** */

       ringColor: {


        //  surface color

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
    


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
     

        },

        
         //  brand color

         b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',
          t1l1a4: 'var(--brand-type-1-layer-1-alpha-4)',


          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',
          t1l2a4: 'var(--brand-type-1-layer-2-alpha-4)',




          
          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',
          t2l1a4: 'var(--brand-type-2-layer-1-alpha-4)',


          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',
          t2l2a4: 'var(--brand-type-2-layer-2-alpha-4)',

        },


        //  specific color

        red: {

          l1a1: 'var(--red-layer-1-alpha-1)',
          l1a2: 'var(--red-layer-1-alpha-2)',
          l1a3: 'var(--red-layer-1-alpha-3)',
          l1a4: 'var(--red-layer-1-alpha-4)',



          l2a1: 'var(--red-layer-2-alpha-1)',
          l2a2: 'var(--red-layer-2-alpha-2)',
          l2a3: 'var(--red-layer-2-alpha-3)',
          l2a4: 'var(--red-layer-2-alpha-4)',

        },


        green: {

          l1a1: 'var(--green-layer-1-alpha-1)',
          l1a2: 'var(--green-layer-1-alpha-2)',
          l1a3: 'var(--green-layer-1-alpha-3)',
          l1a4: 'var(--green-layer-1-alpha-4)',



          l2a1: 'var(--green-layer-2-alpha-1)',
          l2a2: 'var(--green-layer-2-alpha-2)',
          l2a3: 'var(--green-layer-2-alpha-3)',
          l2a4: 'var(--green-layer-2-alpha-4)',

        },


         blue: {

          l1a1: 'var(--blue-layer-1-alpha-1)',
          l1a2: 'var(--blue-layer-1-alpha-2)',
          l1a3: 'var(--blue-layer-1-alpha-3)',
          l1a4: 'var(--blue-layer-1-alpha-4)',



          l2a1: 'var(--blue-layer-2-alpha-1)',
          l2a2: 'var(--blue-layer-2-alpha-2)',
          l2a3: 'var(--blue-layer-2-alpha-3)',
          l2a4: 'var(--blue-layer-2-alpha-4)',

        },


        gray: {

          l1a1: 'var(--gray-layer-1-alpha-1)',
          l1a2: 'var(--gray-layer-1-alpha-2)',
          l1a3: 'var(--gray-layer-1-alpha-3)',
          l1a4: 'var(--gray-layer-1-alpha-4)',



          l2a1: 'var(--gray-layer-2-alpha-1)',
          l2a2: 'var(--gray-layer-2-alpha-2)',
          l2a3: 'var(--gray-layer-2-alpha-3)',
          l2a4: 'var(--gray-layer-2-alpha-4)',

        },



      },


       /* **placeholderColor** */   //(Same with Text Color)


       placeholderColor: {


         //  default color

         l1: {

          a1: 'var(--layer-1-alpha-1)',
          a2: 'var(--layer-1-alpha-2)',
          a3: 'var(--layer-1-alpha-3)',

        },


        l2: {

          a1: 'var(--layer-2-alpha-1)',
          a2: 'var(--layer-2-alpha-2)',
          a3: 'var(--layer-2-alpha-3)',

        },




        //  brand color

        b: {

          t1l1a1: 'var(--brand-type-1-layer-1-alpha-1)',
          t1l1a2: 'var(--brand-type-1-layer-1-alpha-2)',
          t1l1a3: 'var(--brand-type-1-layer-1-alpha-3)',
          t1l1a4: 'var(--brand-type-1-layer-1-alpha-4)',


          t1l2a1: 'var(--brand-type-1-layer-2-alpha-1)',
          t1l2a2: 'var(--brand-type-1-layer-2-alpha-2)',
          t1l2a3: 'var(--brand-type-1-layer-2-alpha-3)',
          t1l2a4: 'var(--brand-type-1-layer-2-alpha-4)',




          
          t2l1a1: 'var(--brand-type-2-layer-1-alpha-1)',
          t2l1a2: 'var(--brand-type-2-layer-1-alpha-2)',
          t2l1a3: 'var(--brand-type-2-layer-1-alpha-3)',
          t2l1a4: 'var(--brand-type-2-layer-1-alpha-4)',


          t2l2a1: 'var(--brand-type-2-layer-2-alpha-1)',
          t2l2a2: 'var(--brand-type-2-layer-2-alpha-2)',
          t2l2a3: 'var(--brand-type-2-layer-2-alpha-3)',
          t2l2a4: 'var(--brand-type-2-layer-2-alpha-4)',

        },






      //  specific color

      red: {

        l1a1: 'var(--red-layer-1-alpha-1)',
        l1a2: 'var(--red-layer-1-alpha-2)',
        l1a3: 'var(--red-layer-1-alpha-3)',
        l1a4: 'var(--red-layer-1-alpha-4)',



        l2a1: 'var(--red-layer-2-alpha-1)',
        l2a2: 'var(--red-layer-2-alpha-2)',
        l2a3: 'var(--red-layer-2-alpha-3)',
        l2a4: 'var(--red-layer-2-alpha-4)',
    
      },


      green: {

        l1a1: 'var(--green-layer-1-alpha-1)',
        l1a2: 'var(--green-layer-1-alpha-2)',
        l1a3: 'var(--green-layer-1-alpha-3)',
        l1a4: 'var(--green-layer-1-alpha-4)',



        l2a1: 'var(--green-layer-2-alpha-1)',
        l2a2: 'var(--green-layer-2-alpha-2)',
        l2a3: 'var(--green-layer-2-alpha-3)',
        l2a4: 'var(--green-layer-2-alpha-4)',

      },


       blue: {

        l1a1: 'var(--blue-layer-1-alpha-1)',
        l1a2: 'var(--blue-layer-1-alpha-2)',
        l1a3: 'var(--blue-layer-1-alpha-3)',
        l1a4: 'var(--blue-layer-1-alpha-4)',



        l2a1: 'var(--blue-layer-2-alpha-1)',
        l2a2: 'var(--blue-layer-2-alpha-2)',
        l2a3: 'var(--blue-layer-2-alpha-3)',
        l2a4: 'var(--blue-layer-2-alpha-4)',

      },


      gray: {

        l1a1: 'var(--gray-layer-1-alpha-1)',
        l1a2: 'var(--gray-layer-1-alpha-2)',
        l1a3: 'var(--gray-layer-1-alpha-3)',
        l1a4: 'var(--gray-layer-1-alpha-4)',

        l2a1: 'var(--gray-layer-2-alpha-1)',
        l2a2: 'var(--gray-layer-2-alpha-2)',
        l2a3: 'var(--gray-layer-2-alpha-3)',
        l2a4: 'var(--gray-layer-2-alpha-4)',

      },







        //  surface color  (Just for SVG)

        s: {

          t1a1: 'var(--surface-type-1-alpha-1)',
          t1a2: 'var(--surface-type-1-alpha-2)',
          t1a3: 'var(--surface-type-1-alpha-3)',
          t1a4: 'var(--surface-type-1-alpha-4)',
       


          t2a1: 'var(--surface-type-2-alpha-1)',
          t2a2: 'var(--surface-type-2-alpha-2)',
          t2a3: 'var(--surface-type-2-alpha-3)',
          t2a4: 'var(--surface-type-2-alpha-4)',
    

        },


      },


      /* **fontFamily** */


      fontFamily: {
        'regular': ['Lato', 'sans-serif'],
        'regular-space': ['Roboto Mono', 'monospace'],
        'cursive-1': ['Lobster Two', 'cursive'],
        'cursive-2': ['Kaushan Script', 'cursive'],
        'cursive-3': ['Yatra One', 'cursive'],
        'cursive-4': ['Train One', 'cursive'],
        'handwriting': ['Indie Flower', 'cursive'],
        'bangla-cursive': ['Atma', 'cursive'],
        // Use 'Lato' to write any language's regular writing.
        // 'lobster-two' in italic format looks better.  
      },



    /* **BorderRadius** */
  

    borderRadius: {
     '0': '0rem',
     '1': '0.25rem',
     '2': '0.5rem',
     '3': '0.75rem',
     '4': '1rem',
     '5': '1.5rem',
     'circle': '9999px'
     
    },



      /* I could have use w-[16px] or, h-[16px]. But if I do that, It wouldn't be rem, it would be px which I don't want.*/

    width: {
      '4px':  '0.25rem',
      '8px':  '0.5rem',
      '12px': '0.75rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '28px': '1.75rem',
      '32px': '2rem',
      '36px': '2.25rem',
      '40px': '2.5rem',
      '44px': '2.75rem',
      '48px': '3rem',
      '52px': '3.25rem',
      '56px': '3.5rem',
      '60px': '3.75rem',
      '64px': '4rem',
      '68px': '4.25rem',
      '72px': '4.5rem',
      '76px': '4.75rem',
      '80px': '5rem'

    },


    
    height: {
      '4px':  '0.25rem',
      '8px':  '0.5rem',
      '12px': '0.75rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '28px': '1.75rem',
      '32px': '2rem',
      '36px': '2.25rem',
      '40px': '2.5rem',
      '44px': '2.75rem',
      '48px': '3rem',
      '52px': '3.25rem',
      '56px': '3.5rem',
      '60px': '3.75rem',
      '64px': '4rem',
      '68px': '4.25rem',
      '72px': '4.5rem',
      '76px': '4.75rem',
      '80px': '5rem'

    },




      // Max-width

      maxWidth: {
        '25%': '25%',
        '30%':'30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '98%': '98%'


      },



      // Min-width

      minWidth: {
        '25%': '25%',
        '30%':'30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '98%': '98%'


      },

      //  Min-Height
      minHeight: {

        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
        'full': '100%',
      }



    },
  },

  

  plugins: [],
}