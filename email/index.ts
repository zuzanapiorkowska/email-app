import mjml2html from "mjml";
/*
  Compile an mjml string
*/
const options = {};

const email = `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-text align="center" color="#555" />
      <mj-section background-color="#fff" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#eee">
    <mj-section>
      <mj-column>
        <mj-button background-color="#F63A4D" href="http://localhost:3000/api/rating?email=me@me.pl&rating=1"> 1 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button background-color="#F63A4D" href="http://localhost:3000/api/rating?email=me@me.pl&rating=2"> 2 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button background-color="#F63A4D" href="http://localhost:3000/api/rating?email=me@me.pl&rating=3"> 3 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button background-color="#F63A4D" href="http://localhost:3000/api/rating?email=me@me.pl&rating=4"> 4 </mj-button>
      </mj-column>
      <mj-column>
        <mj-button background-color="#F63A4D" href="http://localhost:3000/api/rating?email=me@me.pl&rating=5"> 5 </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

export const htmlOutput = mjml2html(email, options);
