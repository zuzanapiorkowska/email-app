import mjml2html from "mjml";
/*
  Compile an mjml string
*/
const options = {};

const email = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-text align="center" />
      <mj-section />
      <mj-button css-class="hover" border-radius="0.4rem" background-color="rgba(129, 157, 219, 0.8)"  />
    </mj-attributes>
    <mj-style> .hover:hover td, .hover:hover p { opacity: 0.8 } </mj-style>
  </mj-head>
  <mj-body background-color="rgb(250, 250, 250)">
  
     <mj-section>
    </mj-section>
    <mj-section border-radius="0.5rem">
    <mj-column>
    <mj-text height="40px" color="rgb(60, 50, 150);" padding="0" font-size="25px" font-weight="bolder"> Jak podobał Ci się nasz staż? </mj-text>
    <mj-text height="20px" color="rgb(145, 145, 145);" font-size="15px" padding="10px" >(1 - w ogóle, 2 - niezbyt, 3 - średnio, 4 - był ok, 5 - bardzo) </mj-text>
    <mj-text height="0px" color="rgb(250, 120,150)" font-weight="bold" font-size="15px" padding="10px" > Kliknij dopiero, kiedy będziesz pewny! :) </mj-text>
    </mj-column>
    </mj-section rgba(230, 230, 230, 0.7)>
       <mj-section background-color="rgba(230, 230, 230, 0.7)" border-radius="0.5rem">
      <mj-column>
       <mj-button css-class="hover" href="localhost:3000/extended?email=me&rating=2"> 1 </mj-button>
      </mj-column>
      <mj-column> 
        <mj-button  href="localhost:3000/extended?email=me&rating=2"> 2 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button  href="localhost:3000/extended?email=me&rating=3"> 3 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button  href="localhost:3000/extended?email=me&rating=4"> 4 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button href="localhost:3000/extended?email=me&rating=5"> 5 </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export const htmlOutput = mjml2html(email, options);
