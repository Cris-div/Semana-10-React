import Greeting from "./components/Greeting";
import Title from "./components/Title";
import InstituteCard from "./components/InstituteCard";
function App() {
  const institutes = [
    {
      id: 1,
      name: 'Tecsup',
      description: 'Tecsup es una organización educativa privada sin fines de lucro, dedicada a formar y capacitar profesionales.',
      image: 'https://www1.tecsup.edu.pe/sites/default/files/branches/image_mini/lima_0.png',
    },
    {
      id: 2,
      name: 'Idat',
      description: 'Instituto Idat con más de 35 años activando el potencial de los jóvenes. Entra y conoce nuestras carreras profesionales, Escuela de Coding y cursos virtuales.',
      image: 'https://cursostotales.com.pe/wp-content/uploads/2022/01/IDAT.jpg',
    },
    {
      id: 3,
      name: 'Certus',
      description: 'Carreras con futuro laboral! Encuentra las carreras técnicas, certificaciones y diplomas con más alta demanda en el mercado laboral. ¡Ingresa y conócenos!',
      image: 'https://www.certus.edu.pe/wp-content/uploads/2019/01/SJL_400.png',
    },
    {
      id: 4,
      name: 'Senati',
      description: 'Servicio Nacional de Adiestramiento en Trabajo Industrial. SENATI lleva 63 años brindando la mejor educación para las ocupaciones profesionales',
      image: 'https://www.businessempresarial.com.pe/wp-content/uploads/2021/07/senati_es_el_instituto_mas_recordado_de_lima_2.jpg',
    },
  ];
  return (
    <>
      <section className="py-4">
        <div className="container">
          <h1>Instituto App (Unocc Christian)</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {institutes.map((institute) => (
              <InstituteCard
              key={institute.id}
              name={institute.name}
              description={institute.description} 
              image={institute.image}
              />
              ))}
          </div>      
        </div>
      </section>
    </>
  );
}

export default App;
