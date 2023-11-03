import styles from './ModalTerms.module.css'

export const ModalTerms = ({ isModalOpen, handleModal }) => {
  return (
    <div
          style={{ display: isModalOpen ? '' : 'none' }}
          className={styles.modal}>
            <span
            className={styles.closeModal}
            onClick={handleModal}>X</span>
            <div className={styles.textContainer}>
                <p>Este documento se rige por todo el ordenamiento jurídico, especialmente las normas del Código Civil y el de Comercio, así como también por la Ley Sobre Protección de la Vida Privada y la Ley de Derechos del Consumidor. Adicionalmente, también se incorporan normas administrativas al texto, como lo es, por ejemplo, la Resolución Exenta N° 11 del 14/02/03 dictada por el SII.
                País: Chile</p>

                <h4>Propiedad intelectual y nuevas tecnologías </h4>
                <ul>
                    <li>Cesión de Derechos de Imagen</li>
                    <li>Contrato de Desarrollo de Software</li>
                    <li>Política de Privacidad de un Sitio Web</li>
                    <li>Contrato de Cesión de Derecho de Autor</li>
                    <li>Contrato de Licencia de Uso de Obra</li>
                    <li>Requerimiento por infracción de derechos de marca</li>
                    <li>Contrato de influencer  </li>
                </ul>

                <h4>El derecho a la imagen</h4>
                <p>El derecho a la imagen ha sido reconocido como un derecho de la personalidad, es decir, que es inherente a la persona humana y que constituye un atributo de la misma. En concreto, el derecho a la imagen consiste en la facultad que tiene una persona para captar, difundir, utilizar o publicitar su propia imagen y de oponerse a que otros lo hagan, sin su autorización o consentimiento.</p>

                <h4>Contrato de Desarrollo de Software </h4>
                <p>Se considera como software o programa informático toda aquella secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema informático (como puede ser un ordenador, un servidor, una tablet o un teléfono móvil) para realizar una función o una tarea específica, independientemente del lenguaje de programación utilizado para su creación.</p>
                <p>En este contrato el software se desarrollará a consecuencia de un encargo, por lo que será necesario que la parte desarrolladora haga un levantamiento o recolección de la información necesaria relacionada con las expectativas y recursos de la parte cliente, de maner de definir correctamente los requerimientos.</p>
                <p>Los requerimientos para el desarrollo de un software contienen los objetivos o propósitos que tiene la parte cliente (ej. ofrecer servicios profesionales, hacer ventas por internet), las funcionalidades que deberá cumplir el software (ej. recibir consultas a través de chatbot, actualizar los productos ofrecidos al stock disponible) y las restricciones para su funcionamiento (ej. ajustar la interfaz de usuario al público específico al que va dirigido).
                </p>
                <p>Este modelo permite acordar el desarrollo de todo tipo de programas informáticos, como pueden ser los dedicados a la gestión empresarial, al diseño industrial, la organización de stocks, procesadores de texto, análisis de datos o páginas web. También se incluyen todo tipo de aplicaciones (apps) o programas diseñados para su ejecución en teléfonos móviles o tablets.</p>

                <h4>Metodología tradicional o metodología `Agile` para el desarrollo del Software</h4>
                <p>En este contrato se contempla la posibilidad de encargar el desarrollo del software independiente de la metodología que se use, pero recogiendo en su contenido las diferencias que presentan las metodologías tradicionales y las metodologías `Agile`.
                </p>
                <p>La política de privacidad de un sitio web contiene las normas acerca de cómo se recogen y gestionan los datos personales de las personas que acceden y hacen uso de una página o sitio web (usuarias), así como acerca de las cookies utilizadas por el mismo. Este documento, en lo que no contraviene la legislación chilena, está adaptado al Reglamento Europeo de Protección de Datos (RGPD). </p>

                <h4>Política de Privacidad de un Sitio Web</h4>
                <p>Se consideran datos personales los relativos a cualquier información concerniente a personas naturales, identificadas o identificables.
                Se consideran cookies los archivos que contienen una pequeña cantidad de información recolectada por un sitio web determinado respecto de las personas usuarias, y que es almacenada en el navegador utilizado por cada usuaria, quedando disponible para ser consultado por el sitio web cuando la usuaria acceda a él.
                </p>
                <p>Este documento contiene las menciones o referencias legales que servirán para regular las condiciones en las que el sitio o página web recoge, gestiona y retiene (`trata`) los datos personales de las personas usuarias que acceden, navegan y utilizan el sitio o página web.
                </p>
                <p>Este documento también describe los derechos de las personas usuarias (ej. a saber si el sitio web está tratando sus datos, derecho a que sus datos sean corregidos o eliminados, cuando corresponda) y las obligaciones del sitio web en relación con el tratamiento de sus datos personales.</p>
                <p>Para el caso en que se desee elaborar un documento que contenga todas las normas que regulan la interacción de las personas usuarias con el contenido que la misma página web pone a disposición, con los productos y/o servicios ofrecidos en ella, y con la identificación de las personas responsables del sitio, se encuentra disponible y mejor adaptado a dicha circunstancia el modelo de términos y condiciones general de uso.</p>
                <p>De todas maneras, las políticas de privacidad de un sitio web forman parte de sus términos y condiciones generales de uso, por lo cual, en ambos modelos, términos y condiciones y política de privacidad, se hace referencia al otro, de modo que las personas usuarias puedan acceder y conocer la totalidad de normas que les afectan al hacer uso de un sitio web determinado.  </p>

                <h4>Contrato de Cesión de Derecho de Autor</h4>
                <h5>Derecho de autor: derechos morales y patrimoniales</h5>
                <p>El derecho de autor es un conjunto de normas que protegen a las obras intelectuales (literarias, artísticas o científicas) y a las personas que las crean, es decir, a sus autoras.</p>
                <p>Los derechos morales de autor protegen la paternidad e integridad de la obra, y le confieren a la autora, de por vida, las siguientes facultades: reivindicar o reclamar la paternidad de la obra, asociando a la misma su nombre o seudónimo conocido; oponerse a toda deformación, mutilación, u otra modificación hecha sin expreso y previo consentimiento; mantener la obra inédita; autorizar a terceros a terminar la obra inconclusa, previo consentimiento del editor o del cesionario si los hubiere, y exigir que se respete su voluntad de mantener la obra anónima o seudónima mientras esta no pertenezca al patrimonio cultural común.
                </p>
                <p>Los derechos morales son irrenunciables e inalienables, por lo que no pueden ser cedidos a terceras personas; es decir, pertenecerán en todo caso a la autora de la obra o a sus herederos.</p>
                <p>Los derechos patrimoniales de autor protegen la explotación comercial de la obra y confieren a su titular las facultades de utilizar directa y personalmente la obra, de transferir, total o parcialmente, sus derechos sobre ella y de autorizar su utilización por terceras personas.</p>
                <p>La explotación comercial de una obra le consiste en que quien sea titular de los derechos patrimoniales de autor de la misma podrá hacer uso y aprovechamiento, y autorizar a terceros a hacer uso y aprovechamiento de dicha obra, sea o no con fines económicos, como por ejemplo, hacer copias y vender ejemplares de un libro, emitir canciones por la radio, autorizar la transmisión de una película por la televisión.</p>
                <p>A diferencia de los derechos morales, los derechos patrimoniales de autor sí pueden ser cedidos. Por esta razón, el contrato de cesión de derecho de autor únicamente permite transferir los derechos patrimoniales de autor, también conocidos como derechos de explotación. El derecho moral de la autora sobre una obra, que no puede ser cedido, debe ser respetado por la cesionaria que reciba los derechos patrimoniales.</p>

                <h4>Modos de uso o formas de explotación de la obra</h4>
                <p>La o las personas que sean titulares exclusivas o no exclusivas del derecho patrimonial de autor tienen derecho a utilizar la obra de alguna de las siguientes formas:
                </p>
                <ul>
                    <li>Publicarla: permite difundir o exhibir la obra por cualquier medio, por ejemplo, exhibir una obra plástica en un museo.</li>
                    <li>Reproducirla: permite realizar copias de la obra o fijarla de manera temporal o permanente en algún medio que permita repetir su contenido, por ejemplo, emitir copias de un libro.</li>
                    <li>Adaptarla: permite modificar la obra, por ejemplo, traduciéndola, transformando un poema en una obra teatral.</li>
                    <li>Ejecutarla públicamente: permite emitir la obra por algún medio apto para su reproducción, por ejemplo, grabar un disco musical.</li>
                    <li>Distribuirla: permite vender o transferir la obra original o sus copias, por ejemplo, vender 100 copias de un libro a una cadena de librerías.</li>
                </ul>

                <p>En este contrato se establecerá si la cesionaria, como consecuencia de la cesión, podrá realizar todas, algunas o solamente una de las acciones mencionadas. En cualquier caso, la cesionaria solamente podrá ejercer los modos de uso previstos en este contrato. </p>

                <strong>Todos los derechos legales son parte de Liber Locus y sus representantes Legales: Christopher Valdebenito, Arturo Cisternas, Bruce Tapia, Cynthia Betancourt. </strong>

                <h4>Contrato de Licencia de Uso de Obra</h4>
                <ul>
                    <li>La licencia es exclusiva si la o las personas licenciantes se obligan a no otorgar otras licencias o permisos de uso sobre la misma obra a terceras personas distintas de la licenciataria mientras dure este contrato. De esta manera, además de las licenciantes, solamente las licenciatarias podrán explotar la obra u obras.</li>
                    <li>La licencia no es exclusiva si la o las personas licenciantes podrán entregar licencias iguales o similares a las establecidas en este contrato a terceras personas mientras dure este contrato, quienes también podrán hacer uso de las obras.</li>
                </ul>

                <p>Sea que la licencia otorgue un permiso exclusivo o no exclusivo a la licenciataria, la licenciante siempre conserva sus derechos de autor sobre la obra u obras de que se trate. Si lo que se desea es traspasar este derecho de autor, no corresponde completar este modelo, sino que el de cesión de derechos de autor.</p>

                <h4>Modos de uso o formas de explotación de la obra</h4>
                <p>Por medio de este contrato, la parte licenciante permite hacer uso de una o varias obras de las que es titular a la parte licenciataria, y este uso podrá consistir en alguna o todas las formas de explotación que a continuación se indican:</p>

                <ul>
                    <li>Publicar: permite difundir o exhibir la obra por cualquier medio, por ejemplo, exhibir una obra plástica en un museo.</li>
                    <li>Reproducir: permite realizar copias de la obra o fijarla de manera temporal o permanente en algún medio que permita repetir su contenido, por ejemplo, emitir copias de un libro.</li>
                    <li>Adaptar: permite modificar la obra, por ejemplo, traduciéndola, transformando un poema en una obra teatral.</li>
                    <li>Ejecutar públicamente: permite emitir la obra por algún medio apto para su reproducción, por ejemplo, grabar un disco musical.</li>
                    <li>Distribuir: permite vender o transferir la obra original o sus copias, por ejemplo, vender 100 copias de un libro a una cadena de librerías.</li>
                </ul>

                <p>La licenciataria solamente podrá ejercer los modos de uso o formas de explotación previstos en este contrato. En consecuencia, a la licenciataria no le serán reconocidos derechos mayores que aquellos que figuren en la licencia.</p>

                <h4>Requerimiento por infracción de derechos de marca</h4>
                <p>El requerimiento por infracción de derechos de marca (o `carta de cese y desista`) permite que una persona exija a otra que cese en la violación de sus derechos de marca, derivados de la inscripción de una marca comercial ante el Instituto Nacional de Propiedad Industrial (INAPI). Una marca comercial es un signo distintivo que puede consistir en palabras, símbolos, colores, o una combinación de estos elementos, para distinguir productos y servicios de otros similares que pueda ofrecer la competencia.</p>
                <p>El propósito de este documento es resolver de manera amistosa y sin juicios el uso no autorizado de marcas comerciales. De esta manera, tiempo y dinero pueden ser ahorrados al evitarse un posible juicio. Mediante esta carta, se informa a su receptor que está utilizando una marca ajena sin autorización, de qué marca se trata, y cuáles son las posibles consecuencias si no detiene ese uso. </p>

            </div>
          </div>
  )
}
