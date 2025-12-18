USE soundcity_db;

-- ROL DE USUARIOS
insert into soundcity_db.user_role (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'admin'
);

insert into soundcity_db.user_role (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'user'
);

-- USUARIOS
insert into soundcity_db.user (
	created_at, updated_at,
	firstname,
    lastname,
    email,
    password,
    image,
    user_role_id
) values (
	now(),
    now(),
    'Pedro',
    'Vai',
    'pedrovai@gmail.com',
    '$2b$08$lDd2/EqeZpQNEVTYjDlaiea530FdWJgpcJcko9KCjBDDQn3Vqjvz2',
    'profile.jpg',
    1
);

insert into soundcity_db.user (
	created_at, updated_at,
	firstname,
    lastname,
    email,
    password,
    image,
    user_role_id
) values (
	now(),
    now(),
    'Sofía',
    'Garcia',
    'sofigarcia@gmail.com',
    '$2b$08$lDd2/EqeZpQNEVTYjDlaiea530FdWJgpcJcko9KCjBDDQn3Vqjvz2',
    'profile.jpg',
    2
);

insert into soundcity_db.user (
	created_at, updated_at,
	firstname,
    lastname,
    email,
    password,
    image,
    user_role_id
) values (
	now(),
    now(),
    'Laura',
    'Colidio',
    'jcauser2@ebay.com',
    '$2b$08$lDd2/EqeZpQNEVTYjDlaiea530FdWJgpcJcko9KCjBDDQn3Vqjvz2',
    'profile.jpg',
    2
);

insert into soundcity_db.user (
	created_at, updated_at,
	firstname,
    lastname,
    email,
    password,
    image,
    user_role_id
) values (
	now(),
    now(),
    'Ana',
    'Vai',
    'anavai@facebook.com',
    '$2b$08$lDd2/EqeZpQNEVTYjDlaiea530FdWJgpcJcko9KCjBDDQn3Vqjvz2',
    'profile.jpg',
    1
);

insert into soundcity_db.user (
	created_at, updated_at,
	firstname,
    lastname,
    email,
    password,
    image,
    user_role_id
) values (
	now(),
    now(),
    'María',
    'Ramone',
    'mramone4@ted.com',
    '$2b$08$lDd2/EqeZpQNEVTYjDlaiea530FdWJgpcJcko9KCjBDDQn3Vqjvz2',
    'profile.jpg',
    2
);

-- ESTADO DEL CARRITO DE COMPRAS
insert into soundcity_db.status (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Activo'
);

insert into soundcity_db.status (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Abandonado/Expirado'
);

insert into soundcity_db.status (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'En preparación'
);

insert into soundcity_db.status (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'En envio'
);

insert into soundcity_db.status (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Recibido'
);

-- CARRITO DE COMPRAS
insert into soundcity_db.cart (
	created_at, updated_at,
	shipping_address,
    date_start,
    date_end,
    total_purchase,
    user_id,
    status_id
) values (
	now(),
    now(),
    'Calle Falsa 1300',
    now(),
    null,
    1000000.00,
    1,
    1
);

-- DETALLE DE CARRITO DE COMPRAS
insert into soundcity_db.cart_detail (
	created_at, updated_at,
	cart_id,
    product_id,
    quantity,
    price
) values (
	now(),
    now(),
    1,
    1,
    1,
    1000000.00
);

-- PRODUCTOS
insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Arturia MiniLab 3 Controlador MIDI 25 Teclas',
    1,
    '<h4>Mas vendido 1° en Controladores Midi</h4><p>El MiniLab 3 es la última version del celebrado controlador icónico de Arturia. Pensado para quienes buscan teclas y no solo pads en un controlador de pequeño tamaño. Además de las teclas y los pads cuenta con knobs, faders y una pantalla OLED. Una combinación atípica en este formato de controlador, pero que se encuentra bien resuelta en esta presentación.</p><p>Con varias plantillas personalizables (hasta 5: de user1 a user5) en las que el usuario puede definir el tipo de mensaje que desea en cada control, y una plantilla adicional centrada en la conectividad con los plugins de Arturia para ofrecer mayores posibilidades entre el controlador y estos plugins vía MIDI.</p><p>Posee un modo DAW a base de potentes scripts (disponibles para Logic, Bitwig, Live, FL Studio y Reason) y que consiguen dejar atrás al mouse para realizar muchas de las acciones más habituales desde el propio Minilab 3 gracias a su excelente integración que no requiere engorrosas configuraciones.</p><p>En definitiva, el MiniLab 3 es un controlador MIDI USB lo suficientemente sencillo pero a su vez altamente versatil, que se adapta fácilmente a tus necesidades, tu estilo y tu flujo de trabajo, para que puedas hacer música de la manera que más te gusta.&nbsp;</p>',
    'controladorMIDIArturiaMiniLab3.png',
    1,
    1000000.00,
    900000.00,
    6,
    166666.70
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Fender Standard Stratocaster Plus Top Cherry Sunburst 2014',
    2,
    '<p>Material del cuerpo: Aliso con tapa de arce flameado</p><p>Acabado del cuerpo: Poliéster brillante</p><p>Forma del cuerpo: Stratocaster®</p><p>Puente: Trémolo sincronizado de 2 puntos con selletas de acero doblado</p><p>Pastilla de puente: Player Series Alnico 5 Strat® Single-Coil</p><p>Perillas de control: Plástico color pergamino</p><p>Controles: Volumen maestro, Tono 1 (pastillas mástil/medio), Tono 2 (pastilla de puente)</p><p>Diapasón: Rosewood</p><p>Radio del diapasón: 9.5'' (241 mm)</p><p>Número de trastes: 22</p><p>Tamaño de trastes: Medium Jumbo</p><p>Herrajes: Níquel/Cromo</p><p>Pastilla media: Player Series Alnico 5 Strat Single-Coil</p><p>Acabado del mástil: Uretano satinado en la parte trasera</p><p>Material del mástil: Arce</p><p>Pastilla de mástil: Player Series Alnico 5 Strat Single-Coil</p><p>Perfil del mástil: Modern “C”</p><p>Ancho de la cejilla: 1.650´´ (42 mm)</p><p>Orientación: Diestro</p><p>Golpeador: 3 capas Negro/Blanco/Negro</p><p>Configuración de pastillas: SSS</p><p>Selector de pastillas: Palanca de 5 posiciones:</p><p>-Posición 1: Pastilla de puente</p><p>-Posición 2: Pastilla de puente y medio</p><p>-Posición 3: Pastilla de medio</p><p>-Posición 4: Pastilla de medio y mástil</p><p>-Posición 5: Pastilla de mástil</p><p>Incrustaciones en el diapasón: Puntos blancos</p><p>Escala: 25.5´´ (648 mm)</p><p>Cejilla: Hueso sintético</p><p>Clavijeros: Estándar fundidos/sellados</p><p>Color: Aged Cherry Burst</p><p>Dimensiones: 4.4 x 15.1 x 42 in</p><p>Accesorios incluidos: Ninguno</p><p>Alma (truss rod): Estándar</p><p>Llave de ajuste del alma: Hexagonal (Allen) de 3/16´´</p>',
    'fender-strato1.jpg',
    2,
    2149875.00,
    1934887.50,
    6,
    358312.50
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Ibanez GSA60-SB Brown Sunburst',
    3,
    '-Marca: Ibanez<br>-Modelo: GSA60-SB<br>-Tipo de cuello: Mastil de arce GSA<br>-Tapa,Fondo y cuerpo: Okoume cuerpo<br>-Diapason: Incrustacion de puntos blancos en el diapason de Jatoba<br>-Trastes: Trastes jumbo<br>-Numero de trastes: 22<br>-Puente: Puente tremolo T102<br>-Espacio de cadena: 10,5 mm<br>-Pastilla del cuello: Pastilla de mastil Infinity RS (S) Pasiva / Ceramica<br>-Pastilla intermedia: Pastilla intermedia Infinity RS (S) Pasiva / Ceramica<br>-Pastilla del puente: Pastilla del puente Infinity R (H) Pasiva / Ceramica<br>-Afinacion de fabrica: 1E, 2B, 3G, 4D, 5A, 6E<br>-Calibre de cuerda: .009 / .011 / .016 / .024 / .032 / .042<br>-Acabado del hardware: Cromo<br>-Color: Brown Sunburst<br>-Escala: 648mm /25.5''<br> -a: Ancho: 42 mm en la TUERCA<br>-b: Ancho: 57 mm a 22 ¡ F<br>-c: Espesor: 19,5 mm a 1 ¡ F<br>-d: Espesor: 21,5 mm a 12 ¡ F<br>-Radio: 305 mmR',
    'Ibanez-GSA60-SB.png',
    2,
    633784.23,
    557730.12,
    6,
    105630.71
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Bajo Eléctrico Schecter Stiletto Stage-4',
    4,
    'Pais de origen: Indonesia<br>Color de la guitarra: Blanco brillante (WHT) Y Negro Brillante.<br>Cuello<br>Diapason: ebano<br>Material del cuello: Arce de 3 piezas con varillas de refuerzo de fibra de carbono<br>Incrustaciones: Madre de Pearl Offset Dots<br>Marcadores de puntos laterales: Brillan en la oscuridad<br>Escala: 34''(863 mm)<br>Forma del cuello: Thin C <br>Grosor: @ 1er traste- .787''(20 mm) / @ 12 traste- .866'' (22 mm)<br>Trastes: 24 X-Jumbo<br>Radio del diapason: 16''(406 mm)<br>Nuez: Graph Tech XL Black Tusq<br>Ancho de la tuerca: 1.496''(38 mm)<br>Sintonizadores: Grover<br>Truss Rod: Varilla ajustable de 2 vias con tuerca Allen de 5/32''(4 mm)<br><br>Cuerpo<br><br>Contorno superior: Superficie plana<br>Destreza: Diestro<br>Construccion: Cuello a traves<br>Cuerpo material: Caoba<br>Union: Negro de 1 capa<br>Puente: Schecter Custom Bass String Thru (o carga superior)<br><br>Electronica<br><br>Pastilla de puente<br>Schecter Diamond: SuperRock MM<br>Pastilla de cuello: Schecter Diamond SuperRock MM<br>Control S: Volumen maestro (Active-Passive Pull-Pull) / Blend / 3-Band Active EQ<br>Compartimiento de la bateria: 18 voltios con placa de tornillo<br><br>Accesorios<br><br>Color de hardware: Negro<br>Perillas: Metal moleteado con tornillo de fijacion<br>Instrumentos de cuerda: Ernie Ball 4 Cuerdas Super Larga # 2849 (.045-.105)',
    'schecter-stilleto.png',
    3,
    2055560.11,
    1808892.90,
    6,
    342593.35
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Bajo Electrico Fender Tipo Precision Bass Standard Mexico',
    2,
    '-Serie: Serie estandar<br>-Cuerpo: Aliso<br>-Cuello: Arce, forma C moderna, acabado brillante de uretano.<br>-Diapason: Palisandro<br>-Radio 9-1 / 2''(241 mm)<br>-Traste: 20 trastes medianos jumbo<br>-Pastillas: 1 pastilla de una bobina de division de graves de precision estandar (media)<br>-Controles: Volumen, Tono<br>-Puente: estilo vintage estandar con monturas de ranura simple<br>-Cabezales de la maquina: Estandar<br>-Hardware: Chrome<br>-Pickguard: pergamino de 3 capas<br>-Longitud de escala: 34''(864 mm)<br>-Ancho en la tuerca: 1-5 / 8 ''(41.3 mm)<br>-Perillas de bajo Prome cromadas, logotipo de transicion Fender',
    'bajo-fender.png',
    3,
    3487895.72,
    3069348.23,
    6,
    581315.95
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Guitarra Acústica Bromo BAB1 Dreadnought',
    5,
    '<p>Guitarra Acústica Bromo BAB1 Dreadnought<br><br>El debut de Bromo en el mercado es abrumadoramente exitoso. Su diseño, calidad, mano de obra y valor se reconocen instantáneamente, lo que hace que más personas deseen un modelo de guitarra Bromo que puedan pagar. En respuesta a esta amplia solicitud, Bromo ha creado una nueva serie llamada Mt.Balnc, uno de los macizos más hermosos de la tierra y el lugar de nacimiento del montañismo moderno, como el lugar de nacimiento de los sueños de la guitarra.<br><br>Especificaciones:<br>-Modelo: BAB1<br>-Cuerpo Dreadnought<br>-Escala: 645 mm<br>-Ancho de la tuerca: 44,5 mm<br>-Parte superior: picea<br>-Fondo y aros: caoba<br>-Mástil: caoba<br>-Diapasón: Amara Ébano<br>-Barra de armadura: Barra de armadura de dos vías<br>-Incrustación de puente y sillín Nubone<br>-Puente: Eagle Wing Amara Ebony<br>-Incrustaciones del diapasón: Punto blanco ABS<br>-Pines del puente: ABS blanco con punto negro<br>-Decoración de cuello y talón: Monte Bromo, estampado dorado<br>-Trastes: Jumbo, 20 trastes - Nubone XB<br>-Calibre: .011/.015/.023w/.032w/.042w/.052w<br>-Clavijeros: Fundido, Mt. Bromo, Cromado<br>-Acabado: Satinado</p>',
    'acustica-bromo.png',
    4,
    301106.08,
    264973.35,
    6,
    50184.35
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Electro Acustica Tapa Solida Abeto Mr710f Nat',
    6,
    '<p>Guitarra electroacustica<br>Dreadnought con Cutaway<br>Tapa de picea maciza<br>Pala de palisandro (Dalbergia Latifolia)<br>Aros y fondo de caoba<br>Mastil de caoba<br>Diapason y puente de palisandro (Dalbergia Latifolia)<br>Medida: 643 mm<br>Ancho de cejuela: 43 mm<br>Cejuela de hueso<br>Mecanicas cromadas<br>Sistema de pastilla FISHMAN Presys<br>Color: Natural mate</p>',
    'electroacusticacort.png',
    4,
    1228666.67,
    1081226.67,
    6,
    204777.78
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'KEYSTEP 37 CONTROLADOR MIDI',
    1,
    '<p>- Teclado delgado con velocidad y aftertouch<br>- LED RGB en cada tecla para una respuesta instantánea<br>tu secuencia, arp, escala<br>- Modo arpegiador: arriba, abajo, inclusivo,<br>Aleatorio, paseo, patrón y orden exclusivos<br>- Modo secuenciador: 8 secuencias de pasos polifónicos<br>con entrada de nota Rest, Tie y Legato<br>- Control de frecuencia y tap tempo: REC, PLAY y<br>Botones STOP para controlar el rendimiento del<br>secuenciador y arpegiador<br>- Botón Sustain HOLD<br>- Toma de pedal de sostenido<br>- Modo de acordes avanzado con predefinidos o<br>Acordes de usuario y capacidad de rasgueo<br>- Selección del botón SHIFT: Canal MIDI<br>selección, longitud de la puerta, oscilación, edición de secuencia,<br>Cuantización de escala, selección de banco CC<br>- Toma de corriente CC para funcionamiento autónomo<br>- Puertos USB MIDI y MIDI in / out<br>- Sincronizar puertos de E / S<br>- Interruptor de fuente de sincronización: interno, USB, MIDI, reloj<br>- Salidas CV / Gate con paso configurable, puerta<br>y formatos de modulación.<br>- Tono capacitivo y tiras de rueda de modulación<br>- Cada secuencia puede tener 64 pasos con 8 notas<br>de polifonía</p>',
    'arturiakeystep37.png',
    1,
    424395.00,
    350739.67,
    6,
    105943.14
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Arturia MicroFreak Sintetizador Híbrido',
    1,
    '<p>- Sintetizador con 192 ranuras predeterminadas y 128 predeterminadas de fábrica.<br>- 11 osciladores digitales con modos variables, con el motor Plaits de código abierto integrado creado por Mutable Instruments.<br>- Filtro de variable de estado analógico, 12dB / octava, resonante, Paso bajo, Paso de banda, Paso alto.<br>- Sobre ADSR.<br>- Sobre de ciclismo que ofrece dos modos. (Sobre y LFO).<br>- LFO con Sync: Sine, Tri, Saw, Square, Random, Slew Random.<br>- Matriz de modulación con 5 fuentes y 7 destinos (3 destinos personalizados).<br>- Modos monofónicos o parafónicos - Hasta 4 voces.<br>- Teclado capacitivo de 25 teclas con aftertouch polifónico.<br>- Tira capacitiva del tacto.<br>- Pantalla OLED nítida para edición y valores de parámetros.<br>- Arpegiador potente:<br>&nbsp;&nbsp; &nbsp;- Arriba, Orden, Aleatorio, Modos de patrón.<br>&nbsp;&nbsp; &nbsp;- Spice &amp; Dice Gate aleatorizados.<br>- Secuenciador de 64 pasos:<br>&nbsp;&nbsp; &nbsp;- 2 patrones por preset.<br>&nbsp;&nbsp; &nbsp;- 4 pistas de automatización por preset.<br>- Salidas CV / Gate / Mod<br>- USB, Reloj y MIDI dentro y fuera.<br>- Salida master de 6.35 mm y salida de auriculares de 3.5 mm.</p>',
    'arturiamicrofreak.png',
    5,
    817099.50,
    675288.84,
    6,
    203975.27
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Microfono Condenser Audio Technica AT2020 Estudio Cardiode',
    7,
    '<p>Estandar en precio/funcionalidad en tecnologia de microfonos de condensador de recepcion lateral paraestudio. Es ideal para aplicaciones en estudios tipo project/casero. El manejo de altos niveles de presionsonora y su rango dinamico excepcional, ofrece una versatilidad inigualable.<br><br>La membrana de pequenamasa de 16 mm especialmente disenada ofrece una respuesta de frecuencias extendida y una respuestasuperior a las transientes. El patron polar cardioide reduce la captacion de sonidos laterales yposteriores, mejorando el aislamiento de la fuente deseada de sonido. <br><br>Cuenta con una montura para pedestal giratoria con rosca, para una colocacion del microfono facil yprecisa. Con una construccion robusta para un rendimiento duradero, el microfono ofrece una amplia gamadinamica y maneja altos niveles de presion sonora.<br><br>Caracteristicas:<br>-Patron Polar: Cardioide<br>-Respuesta de Frecuencia: 20-20.000 Hz<br>-Sensibilidad de Circuito Abierto: Ð37 dB (14,1 mV) re 1V a 1 Pa<br>-Impedancia: 100 ohms<br>-Nivel de Sonido de Entrada Maximo: 144 dB SPL, a 1 kHz a 1% T.H.D.<br>-Ruido: 20 dB SPL<br>-Rango Dinamico (Tipico): 124 dB, 1 kHz al max SPL<br>-Relacion Senal/Ruido: 74 dB, 1 kHz a 1 Pa<br>-Requisitos de la Potencia Phantom: 48V DC, 2 mA tipico<br>-Peso: 345 g (12,1 oz)<br>-Dimensiones: 162,0 mm (6,38'') de largo, 52,0 mm (2,05'') de diametro maximo del cuerpo<br>-Conector de Salida: Integral de 3 pines tipo XLRM</p>',
    'micaudiotechnica.png',
    6,
    237882.00,
    209336.16,
    6,
    39647.00
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Shure Beta 181 De Captacion Lateral',
    8,
    '<p>Aplicaciones del BETA 181<br>El BETA 181 es un microfono de instrumento multiusos capaz de cubrir una amplia gama de aplicacionesincluyendo guitarras, bajo y bateria (caja y aereos). Dispone de un total de cuatro capsulas distintas(cardioide, supercardioide, bidireccional, omnidireccional), que pueden intercambiarse en funcion de laaplicacion.<br><br>Contenido de la caja<br>El BETA 181 se comercializa con solo una de las cuatro capsulas disponibles. En caso de necesitar algunode los otros tipos de capsulas, deberan adquirirse por separado.  <br><br>1 - A57F Mic Clip<br>1 - A181C Zippered Carrying Case<br>1 - A181WS Windscreen<br><br>Caracteristicas<br>-Capsulas intercambiables de diversos patrones polares que se acoplan a un previo con conector XLR.<br>-Disenado con precision y de captacion lateral, dispone de un innovador anillo de bloqueo para asegurar laconexion entre la capsula y el previo.<br>-Respuesta en frecuencia optimizada para aplicaciones de gran rango dinamico en entornos con gran SPL</p>',
    'micshure.png',
    6,
    1581682.91,
    1391880.96,
    6,
    263613.82
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Placa de sonido Arturia Minifuse 2 Black',
    1,
    '<p>Aplicaciones del BETA 181<br>El BETA 181 es un microfono de instrumento multiusos capaz de cubrir una amplia gama de aplicacionesincluyendo guitarras, bajo y bateria (caja y aereos). Dispone de un total de cuatro capsulas distintas(cardioide, supercardioide, bidireccional, omnidireccional), que pueden intercambiarse en funcion de laaplicacion.<br><br>Contenido de la caja<br>El BETA 181 se comercializa con solo una de las cuatro capsulas disponibles. En caso de necesitar algunode los otros tipos de capsulas, deberan adquirirse por separado.  <br><br>1 - A57F Mic Clip<br>1 - A181C Zippered Carrying Case<br>1 - A181WS Windscreen<br><br>Caracteristicas<br>-Capsulas intercambiables de diversos patrones polares que se acoplan a un previo con conector XLR.<br>-Disenado con precision y de captacion lateral, dispone de un innovador anillo de bloqueo para asegurar laconexion entre la capsula y el previo.<br>-Respuesta en frecuencia optimizada para aplicaciones de gran rango dinamico en entornos con gran SPL</p>',
    'interfazarturia.png',
    7,
    236152.50,
    195167.36,
    6,
    58951.54
);

insert into soundcity_db.product (
	created_at, updated_at,
	name,
    brand_id,
    description,
    image,
    subcategory_id,
    price,
    price_cash,
    price_installment_count,
    price_installment
) values (
	now(),
    now(),
    'Bateria Pearl Master Maple Complete Series 4 Cuerpos Black',
    9,
    '<p>Aplicaciones del BETA 181<br>El BETA 181 es un microfono de instrumento multiusos capaz de cubrir una amplia gama de aplicacionesincluyendo guitarras, bajo y bateria (caja y aereos). Dispone de un total de cuatro capsulas distintas(cardioide, supercardioide, bidireccional, omnidireccional), que pueden intercambiarse en funcion de laaplicacion.<br><br>Contenido de la caja<br>El BETA 181 se comercializa con solo una de las cuatro capsulas disponibles. En caso de necesitar algunode los otros tipos de capsulas, deberan adquirirse por separado.  <br><br>1 - A57F Mic Clip<br>1 - A181C Zippered Carrying Case<br>1 - A181WS Windscreen<br><br>Caracteristicas<br>-Capsulas intercambiables de diversos patrones polares que se acoplan a un previo con conector XLR.<br>-Disenado con precision y de captacion lateral, dispone de un innovador anillo de bloqueo para asegurar laconexion entre la capsula y el previo.<br>-Respuesta en frecuencia optimizada para aplicaciones de gran rango dinamico en entornos con gran SPL</p>',
    'bateriapearl.png',
    8,
    4401378.43,
    3873213.02,
    6,
    733563.07
);

-- MARCAS
insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Arturia'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Fender'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Ibanez'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Schecter'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Bromo'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Cort'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Audio Technica'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Shure'
);

insert into soundcity_db.brand (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Pearl'
);

-- CATEGORÍA
insert into soundcity_db.category (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Teclados y Sintetizadores'
);

insert into soundcity_db.category (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Guitarras y Bajos'
);

insert into soundcity_db.category (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Estudio y Grabación'
);

insert into soundcity_db.category (
	created_at, updated_at,
	name
) values (
	now(),
    now(),
    'Baterías y Percusión'
);

-- SUBCATEGORÍA
insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Controladores MIDI',
    1
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Guitarra Eléctrica',
    2
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Bajos Eléctricos',
    2
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Guitarras Acústicas',
    2
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Sintetizadores',
    1
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Micrófonos',
    3
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Interfaz de Audio',
    3
);

insert into soundcity_db.subcategory (
	created_at, updated_at,
	name,
    category_id
) values (
	now(),
    now(),
    'Baterías Acusticas',
    4 );