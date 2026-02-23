"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECCIONES = [
  {
    id: 1,
    titulo: "1. EMPRESA",
    contenido: (
      <>
        <p>MONEY HOUSE, es una plataforma digital, siendo sus servicios operados por MH DIGITAL BUSINESS S.A.C, 
          debidamente registrado con RUC N° 20613487817 con domicilio fiscal en AV. NICOLAS ARRIOLA NRO. 314 DPTO. D INT. 1101 URB. 
          SANTA CATALINA - LA VICTORIA- LIMA.
        </p>
        <p>
          MH DIGITAL BUSINESS es un proveedor del servicio de cambio de divisas en el Perú, debidamente registrada como 
          casa de cambio ante la Superintendencia de Banca, Seguros y AFP (en adelante, “SBS”) a través de Nº Resolución 
          SBS Nª 00171-2025, en materia de prevención de lavado de activos y financiamiento del terrorismo.
        </p>
        <p>
          MH DIGITAL BUSINESS ofrece sus servicios a través de medios digitales, donde cuenta con un portal en Internet MONEYHOUSE.pe
        </p>
        
      </>
    )
  },
  {
    id: 2,
    titulo: "2. REGISTRO DE USUARIO",
    contenido: (
      <>
        <p>
          EL USUARIO declara y garantiza que el usuario creado en LA PLATAFORMA de MH DIGITAL BUSINESS, es para su uso personal y/o a nombre de la empresa que representa.
        </p>
        <p>
          Para el caso de que EL USUARIO sea una persona natural, declara que no está actuando en nombre de una tercera persona.
        </p>
        <p>
          Para el caso de que EL USUARIO sea una persona jurídica, declara que los datos consignados son verídicos y vigentes respecto a: persona responsable de contacto para el registro y operación, información del representante legal e información actualizada de la empresa.
        </p>
        <p>
          EL USUARIO, al crear un usuario en LA PLATAFORMA, deberá registrar un correo electrónico personal y una clave segura, la cual será de su exclusiva responsabilidad no compartir.
        </p>
        <p>
          EL USUARIO deberá registrar sus datos personales y de contacto (como persona natural o como responsable de la empresa registrada) al momento de crear un perfil, lo cual incluye adjuntar un documento de identidad digitalizado cuando se le solicite.
        </p>
        <p>
          Cada USUARIO registrado en MH DIGITAL BUSINESS podrá crear un perfil de persona natural y varios perfiles de personas jurídicas. Los perfiles permitirán tener un mayor orden contable del distinto tipo de personas a las que el usuario representa.
        </p>
        <p>
          EL USUARIO, al hacer uso de los servicios brindados por MH DIGITAL BUSINESS, se compromete a mantener actualizados los datos brindados o actualizarlos cuando ello se requiera.
        </p>
        <p>
          Para hacer uso de nuestros servicios, el USUARIO debe ser mayor de 18 años de edad y tener una cuenta bancaria en Soles (S/) y/o en Dólares ($) en un banco constituido en la República del Perú.
        </p>
        <p>
          La cuenta registrada en MH DIGITAL BUSINESS será de uso personal e intransferible.
        </p>
      </>
    )
  },
  {
    id: 3,
    titulo: "3. VERIFICACIÓN",
    contenido: (
      <>
        <p>
          MH DIGITAL BUSINESS es una empresa que cumple con la normativa vigente de PLAFT otorgada por la Unidad de Inteligencia 
          Financiera (UIF-SBS) y, por lo tanto, realizará la verificación de los datos personales y, de ser necesario, establecerá 
          contacto con EL USUARIO en cualquier momento que lo considere pertinente.
        </p>
        <p>
          MH DIGITAL BUSINESS podrá ejercer las acciones que crea pertinentes para verificar la autenticidad de su identidad, 
          pudiendo solicitar información adicional necesaria a fin de recabar la documentación correspondiente para dicho fin. 
          Asimismo, se reserva el derecho de solicitar información a las entidades del Estado y/o privadas con el objeto de 
          corroborar la veracidad de la información registrada al momento de abrir la cuenta.
        </p>
        <p>
          La Empresa se reserva el derecho a rechazar cualquier nuevo usuario o transferencia a discreción y sin expresión de 
          causa ante la sospecha de que se estarían utilizando nuestras plataformas para realizar operaciones fraudulentas y/o 
          delictivas.
        </p>
        <p>
          MH DIGITAL BUSINESS se reserva el derecho de rechazar la apertura de cuentas respecto a personas cuya cuenta 
          previamente haya sido dada de baja o suspendida.
        </p>
        <p>
          En caso se detecten cuentas duplicadas, la Empresa se reserva el derecho a cerrar o fusionar las mismas, sin necesidad 
          de dar previo aviso al titular de las cuentas.
        </p>
      </>
    )
  },
  {
    id: 4,
    titulo: "4. REGISTRO DE CUENTAS BANCARIAS",
    contenido: (
      <>
        <p>
          EL USUARIO podrá registrar datos de la cuenta bancaria, tanto en soles como en moneda extranjera.
        </p>
        <p>
          En MH DIGITAL BUSINESS aceptamos cuentas de las siguientes entidades financieras:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>BCP, generados a nivel nacional.</li>
          <li>Interbank, generados a nivel nacional.</li>
          <li>Otras entidades serán tomadas como interbancarias.</li>
        </ul>
        <p>
          MH DIGITAL BUSINESS solicitará el registro de la cuenta bancaria de origen y la cuenta bancaria destino del 
          USUARIO con el fin de poder validar la autenticidad del titular de la cuenta.
        </p>
        <p>
          MH DIGITAL BUSINESS no será responsable del bloqueo de cuentas bancarias registradas por el USUARIO en una 
          entidad financiera o por otra situación similar a esta.
        </p>
        <p>
          MH DIGITAL BUSINESS no será responsable por las comisiones cobradas por las entidades financieras por concepto 
          de transferencia inmediata o transferencia regular, en el momento de la transferencia a cuentas de MH DIGITAL BUSINESS.
        </p>
        <p>
          En caso de que EL USUARIO no tenga cuentas bancarias en Lima y opere con transferencia interplaza, MH DIGITAL 
          BUSINESS deducirá del monto a enviar los costos bancarios asociados al envío del dinero.
        </p>
        <p>
          MH DIGITAL BUSINESS no será responsable de errores, gastos, comisiones o tiempos incurridos debidos a errores del 
          USUARIO o de los bancos donde este transfiera a otra cuenta distinta de la especificada por MH DIGITAL BUSINESS.
        </p>
        <p>
          MH DIGITAL BUSINESS no será responsable de errores, gastos, comisiones o tiempos incurridos debidos a errores del 
          USUARIO cuando este transfiera de una cuenta en una moneda a otra cuenta en una moneda diferente.
        </p>
        <p>
          MH DIGITAL BUSINESS podrá solicitar el registro de información adicional, a fin de cumplir con la normativa que 
          rige la Ley de Prevención de Lavado de Activos y del Financiamiento del Terrorismo (PLAFT).
        </p>
      </>
    )
  },
  {
    id: 5,
    titulo: "5. REGISTROS DE ORDENES",
    contenido: (
      <>
        <p>5.1 CAMBIO DE MONEDA EXTRANJERA:</p>
        <p>
          Para hacer uso de este servicio, el USUARIO debe contar con una cuenta bancaria propia en 
          una entidad financiera supervisada por la SBS, es decir, debe aceptar realizar transferencias 
          (en adelante, la “Cuenta de Cargo”) y una cuenta bancaria propia para la recepción de fondos 
          a través de entidades financieras (en adelante, la “Cuenta de Destino”). MH DIGITAL BUSINESS 
          no realiza ningún cobro de comisión por el uso de este servicio. Sin embargo, el USUARIO debe 
          considerar que en determinados escenarios podrían existir cobros de comisiones o del impuesto 
          a las transacciones financieras (ITF) por parte de las entidades financieras involucradas en la operación.
        </p>

        <p>Para registrar una Orden, el USUARIO lo debe hacer usando su cuenta:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            El USUARIO indicará el monto a transferir y el tipo de operación (compra o venta).
          </li>
          <li>
            El USUARIO está obligado a indicar el origen de los fondos en base a la normativa vigente de prevención 
            de lavado de activos y financiamiento de terrorismo, y esta indicación tendrá validez de una declaración jurada.
          </li>
          <li>
            EL USUARIO indicará la cuenta bancaria de origen y la cuenta bancaria de destino. Estas cuentas podrían 
            ser previamente registradas a través de LA PLATAFORMA o ser registradas en el mismo momento que registra 
            la operación. El tiempo referencial de ejecución de la operación dependerá del tipo de operación que registre.
          </li>
          <li>
            MH DIGITAL BUSINESS no realiza transferencias u operaciones a terceros. Es exigencia de la normativa de la 
            SBS que el titular de la cuenta de origen sea la misma persona natural o jurídica de la cuenta destino. 
            De no coincidir alguna de éstas, deberá proporcionar un número de cuenta con destino al titular de origen de los fondos.
          </li>
          <li>
            Cuando se hayan completado los pasos anteriores se dará por registrada la Orden, estableciéndose desde ese 
            momento un acuerdo de cambio de divisas entre el USUARIO e MH DIGITAL BUSINESS.
          </li>
        </ul>

        <p>
          Luego, el USUARIO deberá realizar la transferencia del monto objeto de cambio desde la Cuenta de Origen, que 
          pertenezca a la persona o entidad que registra la operación y la cual se encuentra previamente registrada, 
          hacia la cuenta bancaria indicada de MH DIGITAL BUSINESS, en un tiempo máximo de cinco (5) minutos, contado a 
          partir del inicio de la operación. Solo durante el período de tiempo señalado se mantendrá el acuerdo de cambio de dólares.
        </p>
        <p>
          Para las operaciones interbancarias, MH DIGITAL BUSINESS realizará la orden cuando los fondos lleguen a sus 
          cuentas como saldo líquido.
        </p>
        <p>
          El tipo de cambio será en base a la fecha y hora en que fueron recibidos los fondos por parte de MH DIGITAL BUSINESS.
        </p>
        <p>
          El USUARIO puede aceptar el nuevo tipo de cambio; en caso no esté de acuerdo se podrá anular la orden y solicitar 
          la devolución. De ser este último el caso, el USUARIO acepta asumir los costos (comisiones, impuestos y otros) en 
          que incurra MH DIGITAL BUSINESS para tales efectos.
        </p>
        <p>
          EL USUARIO deberá asumir el costo de la transferencia interbancaria cobrada por su entidad financiera y ejecutar 
          la transferencia dentro de los horarios establecidos para la operativa interbancaria.
        </p>
        <p>
          El USUARIO deberá adjuntar la constancia de la transferencia de los fondos a la cuenta bancaria indicada por 
          MH DIGITAL BUSINESS, en el momento del registro de la operación y por el monto acordado.
        </p>
        <p>
          El USUARIO deberá realizar la transferencia desde una cuenta personal o de la empresa que representa. 
          MH DIGITAL BUSINESS no acepta depósitos en efectivo ni cheques, por lo que, de detectarse alguno de estos casos, 
          la operación quedará anulada.
        </p>
        <p>
          Es facultad de MH DIGITAL BUSINESS informar aquellas operaciones que cumplan con la calidad de “operaciones sospechosas” 
          de acuerdo con la normativa que abarca únicamente la materia de prevención de lavado de activos y del financiamiento del 
          terrorismo, emitida por la SBS.
        </p>
        <p>
          Una vez recibidos los fondos, el tiempo para que MH DIGITAL BUSINESS ejecute la orden será no mayor a 3 horas, siempre y 
          cuando no se hayan establecido tiempos diferentes entre las partes o exista algún problema en el sistema del banco. 
          MH DIGITAL BUSINESS realizará la transferencia del monto acordado a la cuenta destino del USUARIO, previamente registrada. 
          MH DIGITAL BUSINESS no se hace responsable del tiempo de transferencia de fondos por parte de las entidades financieras.
        </p>
      </>
    )
  },
  {
    id: 6,
    titulo: "6. TRANSFERENCIAS INTERBANCARIAS/INTERPLAZA",
    contenido: (
      <>
        <p>
          1. MH DIGITAL BUSINESS tiene cuentas bancarias en soles y dólares en el Banco de Crédito del Perú (BCP - Lima) 
          e Interbank (Banco Internacional del Perú - Lima). Las transferencias que se realicen a otros bancos —entre ellos 
          Scotiabank, BBVA Continental, Banco Financiero, Banbif, Banco de la Nación, entre otros— serán consideradas 
          transferencias interbancarias.
        </p>
        <p>
          2. Las transferencias que se realicen entre cuentas bancarias cuyo origen o destino sea distinto a plaza de Lima, 
          son consideradas transferencias interplaza. MH DIGITAL BUSINESS no realiza transferencias hacia cuentas interplaza 
          porque los bancos suelen agregar una alta comisión por transacción. Para evitar cualquier tipo de comisión bancaria 
          interplaza, se recomienda utilizar los aplicativos móviles o páginas web de los bancos para efectuar las transferencias. 
          Operaciones desde ventanilla (BCP o Interbank) o desde cuentas Interbank que no sean de Lima podrían acarrear comisión.
        </p>
        <p>
          3. MH DIGITAL BUSINESS trasladará al usuario cualquier comisión generada por la entidad bancaria en cualquiera de 
          los siguientes casos:
        </p>

        <ol className="list-decimal pl-8 space-y-2">
          <li>
            Use cuentas bancarias de plazas distintas a Lima y esto incurra en comisiones interplaza.
          </li>
          <li>
            Realice una transferencia en la agencia de su entidad bancaria y esta se encuentre en una plaza distinta a Lima.
          </li>
          <li>
            Realice operaciones de transferencia bancaria desde provincias, de otros bancos distintos a: BCP (solo banca por internet) 
            o Interbank.
          </li>
          <li>
            Las comisiones de transferencias interbancarias serán las que el banco estipule al momento de hacer la transferencia a la 
            cuenta destino.
          </li>
        </ol>

        <p>
          Comisiones referenciales para transferencias interbancarias: 1.71 $ (comisión fija).
        </p>

        <p>
          Comisiones referenciales para transferencias interbancarias: 5.30 S/. (comisión fija).
        </p>

        <p>
          Las comisiones interplaza desde ventanilla BCP serán las que refleje el banco al llegar la transacción a cuentas de MH 
          DIGITAL BUSINESS. El usuario asume la totalidad de la comisión.
        </p>

        <p>
          4. Estas comisiones son referenciales y pueden variar sin previa notificación.
        </p>

        <p>
          MH DIGITAL BUSINESS podrá exonerar comisiones de transferencias interbancarias solo si la transacción de cambio supera 
          los 10,000.00 $ o su equivalente en soles. MH DIGITAL BUSINESS se reserva la decisión final sobre este beneficio.
        </p>
      </>
    )
  },
  {
    id: 7,
    titulo: "7. TIEMPOS DE EJECUCIÓN",
    contenido: (
      <>
        <p>1. MH DIGITAL BUSINESS no influye en las operaciones que los bancos realizan, por ende, no se hace responsable por 
          la dilación en los tiempos del envío de los fondos por su entidad bancaria o proveedor de pagos.</p>
        <p>Dicho lo anterior, cabe señalar que la Empresa monitorea continuamente sus cuentas bancarias, y asume la obligación 
          de notificar y completar su orden de compra siempre y cuando hayan sido recibidas antes de las 18:00 horas de un día 
          útil. Si MH DIGITAL BUSINESS recibiera los fondos pasada dicha hora, la orden de compra será completada al día hábil siguiente. 
          Por otro lado, las órdenes de compra colocadas durante un día no hábil también serán procesadas al siguiente día útil.</p>
        <p>El usuario reconoce y acepta que es responsable por verificar la cuenta de destino a la que se le transfiera el dinero, 
          para ello debe tener en consideración que MH DIGITAL BUSINESS tiene cuentas en Soles y en Dólares, y que una difiere de la otra.
           MH DIGITAL BUSINESS no se responsabiliza de ninguna manera por la negligencia del usuario en este aspecto.</p>
        <p>Todas las órdenes de compra colocadas dentro del horario de atención, y en días útiles se procesarán a partir del momento 
          en que se reciban los fondos. Una vez recibidos los mismos, el tiempo para que nosotros ejecutemos la orden no será mayor a 
          45 minutos, siempre y cuando no se hayan establecido tiempos diferentes entre las partes o exista alguna dilación con el banco 
          de la operación correspondiente.</p>
        <p>Es necesario recalcar que MH DIGITAL BUSINESS no controla los tiempos que puedan tomar las diferentes entidades bancarias 
          o entidades que procesan los pagos para poder hacer que los fondos estén disponibles al titular de la cuenta de destino. 
          Asimismo, es importante destacar que los tiempos mencionados anteriormente se encuentran sujetos a variaciones causadas 
          por verificaciones adicionales de seguridad que puedan ser necesarias, a la cuantía del monto requerido por el usuario y/o 
          disponibilidad de las plataformas bancarias utilizadas. Estas condiciones son completamente ajenas a MH DIGITAL BUSINESS y 
          podrían retrasar el procesamiento y ejecución de la orden de compra.</p>
      </>
    )
  },
  {
    id: 8,
    titulo: "8. ANULACIÓN DE ÓRDENES",
    contenido: (
      <>
        <p>Si el USUARIO se demora en realizar la transferencia y/o ésta exceda el Plazo de Recepción de Fondos que son de 5 minutos, 
          MH DIGITAL BUSINESS no podrá mantener el tipo de cambio y la operación podrá quedar ANULADA. Se entiende por operación 
          ANULADA cuando esta última y el tipo de cambio no tienen vigencia y, por tanto, MH DIGITAL BUSINESS no asume el compromiso 
          de mantener el tipo de cambio acordado.</p>
        <p>En el supuesto de que el USUARIO, pasado el Plazo de Recepción de Fondos, haya realizado la transferencia del monto acordado 
          en el registro de la operación o haya realizado una transferencia interbancaria diferida y los fondos hayan ingresado a la 
          cuenta bancaria de MH DIGITAL BUSINESS, el USUARIO podrá:</p>
        <ol className="list-decimal pl-6">
        <li>Aceptar el nuevo tipo de cambio en base a la fecha y hora en que fueron recibidos los fondos por parte de MH DIGITAL BUSINESS.
           Esta fecha y hora será aquella que señale la banca en línea de la entidad financiera que recibe el fondo.</li>
        <li>Solicitar la devolución del monto, para lo cual MH DIGITAL BUSINESS procederá a hacer la devolución del monto en la cuenta 
          registrada previamente; de modo que el USUARIO acepta asumir los costos (comisiones, impuestos y otros) en que incurra 
          MH DIGITAL BUSINESS para tales efectos.</li>
        </ol>
        <p>La anulación por parte del USUARIO solo pasará a evaluación cuando se trate o se presuma de un error de la plataforma.
          Mientras no ocurra ninguna irregularidad con la operación no se aceptará ninguna solicitud.</p>
        <p>Sin perjuicio de lo anteriormente mencionado, en caso de que MH DIGITAL BUSINESS detecte alguna anomalía en el tipo de 
          cambio o no pueda procesar la operación por razones ajenas a la responsabilidad del USUARIO, tendrá la posibilidad de anular 
          la operación de cambio de moneda procediendo con la devolución inmediata del monto abonado por el USUARIO. Dicha devolución 
          será procesada mediante el envío de un correo por parte del USUARIO indicando: nro. de operación, cuenta de origen de los 
          fondos y anexo de su voucher de transferencia. El mismo deberá ser enviado desde el correo registrado en plataforma por parte 
          del USUARIO.</p>
        <p>EL USUARIO se obliga a actuar de buena fe en relación con las operaciones de cambio que solicite y acepta que los montos que 
          acuerde serán transferidos por MH DIGITAL BUSINESS como montos exactos y finales. Por ende, en caso MH DIGITAL BUSINESS 
          transfiera a favor del USUARIO un monto superior al acordado, el USUARIO se obliga a devolver mediante transferencia a favor 
          de la cuenta bancaria que indique MH DIGITAL BUSINESS el saldo transferido en exceso en un plazo no mayor a un (1) día hábil.</p>
      </>
    )
  },
  {
    id: 9,
    titulo: "9. DEVOLUCIONES",
    contenido: (
      <>
        <p>MH DIGITAL BUSINESS se reserva la discreción de aprobación de la solicitud de devolución, estando siempre atentos a la 
          inquietud y consideraciones del USUARIO.</p>
        <p>La solicitud de devolución solo pasará a evaluación cuando se trate o se presuma de un error de la plataforma. 
          Mientras no ocurra ninguna irregularidad con la operación no se aceptará ninguna solicitud. El USUARIO dispone de 
          48 horas para informar al equipo de soporte, brindando la información que se le consulte sobre la materia. 
          Transcurrido el plazo de 48 horas dentro de los días útiles de realizada la transacción de CAMBIO, quedará inválida cualquier 
          solicitud de devolución.</p>
        <p>MH DIGITAL BUSINESS se reserva el derecho de adoptar cualquier acción sobre aquellas solicitudes de cambio registradas 
          o no registradas y/o devoluciones que sean solicitadas por el USUARIO habiendo transcurrido un lapso de tiempo. 
          En este caso, MH DIGITAL BUSINESS podrá aplicar cargos y comisiones administrativas, tomando en consideración la cuantía, 
          la moneda y el lapso transcurrido desde la transferencia de fondos inicial.</p>
        <p>MH DIGITAL BUSINESS no se hace responsable ni ofrece devoluciones en los casos de error en la información brindada por 
          el USUARIO en los datos de transferencia.</p>
        <p>MH DIGITAL BUSINESS no se hace responsable ni ofrece devoluciones por errores de transacción que correspondan a las 
          entidades financieras. Estas deberán resolverse entre el USUARIO y el banco emisor.</p>
        <p>MH DIGITAL BUSINESS no realiza devoluciones a través de efectivo físico, ya que todas las operaciones se realizan vía 
          transferencia bancaria.</p>
        <p>Para solicitar la devolución se deberá enviar un correo electrónico a contacto@moneyhouse.com.pe con el asunto “Devolución”. 
          En dicho correo se deberán consignar todos los detalles de la operación, la cuenta donde se realizará la devolución —la cual 
          deberá ser la misma desde la que se realizó el abono a la cuenta de MH DIGITAL BUSINESS— y adjuntar el voucher del abono 
          inicial.</p>
        <p>El tiempo de atención de la devolución es de hasta 48 horas dentro de los días útiles luego de recibir el correo electrónico 
          con toda la información completa.</p>
      </>
    )
  },
  {
    id: 10,
    titulo: "10. BOLETAS Y FACTURAS ELECTRÓNICAS",
    contenido: (
      <>
        <p>MH DIGITAL BUSINESS emitirá boletas electrónicas a los usuarios registrados como personas naturales y emitirá 
          facturas a los usuarios registrados como personas jurídicas. La respectiva boleta y/o factura será emitida hacia 
          el perfil que ejecute la operación, sea persona natural o persona jurídica.</p>
        <p>Para mantener un orden contable, no se podrán modificar las boletas o facturas una vez emitidas, ya que estas 
          se rigen de acuerdo con los datos proporcionados por el USUARIO. Si el USUARIO requiere alguna modificación, 
          deberá anunciarlo antes de efectuar su operación para proceder con la actualización de sus datos registrados.</p>
        <p>De acuerdo con la normativa de la Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT), 
          las operaciones de cambio de divisas están exentas del pago del IGV, es decir, no existe un cobro adicional por 
          concepto de IGV.</p>
      </>
    )
  },
  {
    id: 11,
    titulo: "11. HORARIO DE ATENCIÓN",
    contenido: (
      <>
        <p>El horario de atención de MH DIGITAL BUSINESS es de lunes a viernes de 9:00 a.m. a 6:00 p.m. y los sábados de 
          9:00 a.m. a 1:00 p.m., siempre que sean días hábiles, es decir, excluyendo feriados locales e internacionales.</p>
        <p>Por lo tanto, las operaciones y transferencias solicitadas por parte del USUARIO deberán realizarse de acuerdo con 
          lo antes señalado. Si el USUARIO realiza una transferencia a las cuentas de MH DIGITAL BUSINESS fuera del horario de 
          atención, la operación podrá no ser aceptada.</p>
        <p>En caso contrario, la misma será finalizada en el horario de apertura del siguiente día hábil, todo bajo las 
          condiciones que MH DIGITAL BUSINESS considere pertinentes.</p>
      </>
    )
  },
  {
    id: 12,
    titulo: "12. SEGURIDAD",
    contenido: (
      <>
        <p>Proteger su privacidad es muy importante para MH DIGITAL BUSINESS. El acceso a los servicios se realiza a través de 
          una contraseña que EL USUARIO ha asignado en el momento del registro a través de LA PLATAFORMA de MH DIGITAL BUSINESS. 
          Por lo tanto, EL USUARIO es el único que conoce esta información y no deberá revelarla a terceros, habiendo sido 
          creada la cuenta para su uso exclusivo.</p>
        <p>MH DIGITAL BUSINESS no revela los datos de su cuenta, direcciones postales, correo electrónico, operaciones ni datos 
          personales en general, excepto ante un mandato emitido por una autoridad competente.</p>
        <p>Todo tipo de información sensible entre su navegador y MH DIGITAL BUSINESS se transfiere de forma encriptada 
          utilizando (SSL). Por esta razón, EL USUARIO deberá asegurarse de que su navegador reconozca y valide el certificado 
          de www.moneyhouse.pe.</p>
      </>
    )
  },
  {
    id: 13,
    titulo: "13. PRESUNCIÓN DE LEGALIDAD",
    contenido: (
      <>
        <p>EL CLIENTE declara bajo juramento que los fondos transferidos a MH DIGITAL BUSINESS provienen exclusivamente de 
          cuentas de su titularidad.</p>
        <p>EL CLIENTE reconoce y acepta que, debido al secreto bancario y a la operatividad del sistema financiero, MH DIGITAL 
          BUSINESS no tiene la facultad técnica ni la obligación de verificar en tiempo real la identidad del titular de la 
          cuenta de origen (ordenante).</p>
        <p>Por consiguiente, toda transferencia recibida con el voucher y número de transferencia correctos se presumirá, de 
          pleno derecho y sin admitir prueba en contrario para efectos del procesamiento, como efectuada por EL CLIENTE.</p>
      </>
    )
  },
  {
    id: 14,
    titulo: "14. MANDATO IRREVOCABLE DE PAGO",
    contenido: (
      <>
        <p>Una vez confirmada la recepción de fondos y procesada la orden de cambio, EL CLIENTE otorga a MH DIGITAL 
          BUSINESS un mandato irrevocable para transferir la contraprestación a la cuenta de destino registrada.</p>
        <p>Perfeccionada dicha transferencia, la operación adquiere la calidad de FIRME E IRREVOCABLE conforme a lo 
          establecido en el Artículo 6 de la Ley N° 29440 (Ley de los Sistemas de Pagos), no siendo susceptible de reversión, 
          anulación o extorno por reclamos posteriores sobre la titularidad de los fondos de origen.</p>
        <p>EL CLIENTE reconoce que la liquidación de la operación agota el servicio contratado.</p>
      </>
    )
  },
  {
    id: 15,
    titulo: "15. EXONERACIÓN POR DELITO CIBERNÉTICO (PHISHING/HACKING)",
    contenido: (
      <>
        <p>MH DIGITAL BUSINESS actúa de buena fe basándose en la apariencia de legitimidad que otorga el sistema bancario. 
          Si una entidad financiera autoriza y procesa una transferencia hacia las cuentas de MH DIGITAL BUSINESS, se entenderá 
          que dicha operación ha superado los controles de seguridad del banco de origen.</p>
        <p>MH DIGITAL BUSINESS no asume responsabilidad civil, penal ni administrativa por fondos recibidos que provengan de 
          accesos ilícitos, hacking, phishing o fraudes informáticos cometidos contra terceros en sus respectivas entidades bancarias, 
          limitándose su responsabilidad a ejecutar la instrucción de cambio de divisas solicitada por el usuario registrado.</p>
      </>
    )
  },
  {
    id: 16,
    titulo: "16. PROPIEDAD INTELECTUAL",
    contenido: (
      <>
        <p>MH DIGITAL BUSINESS está protegido por los derechos de propiedad intelectual. Todos los derechos involucrados, 
          tales como el contenido, diseño visual, logotipos y eslogan que forman parte de los servicios y contenidos de 
          LA PLATAFORMA, pertenecen exclusivamente a MH DIGITAL BUSINESS.</p>
        <p>En tal sentido, se prohíbe utilizar, reproducir, modificar, codificar, copiar, distribuir, transmitir o comercializar 
          los derechos involucrados sin el permiso expreso y por escrito de MH DIGITAL BUSINESS.</p>
        <p>EL USUARIO no adquiere ningún derecho de propiedad intelectual por el uso de los Servicios y Contenidos de LA PLATAFORMA, 
          no constituyendo dicho uso una autorización ni licencia para utilizar los servicios y contenidos con fines distintos a los 
          establecidos en el presente contrato.</p>
      </>
    )
  },
  {
    id: 17,
    titulo: "17. QUEJAS Y RECLAMOS",
    contenido: (
      <>
        <p>Sección de la página web de MH DIGITAL BUSINESS donde el USUARIO puede registrar su reclamo de forma directa con la 
          empresa a través del Libro de Reclamaciones Virtual.</p>
        <p>MH DIGITAL BUSINESS se encuentra comprometido a proporcionar los más altos estándares de calidad y servicio a sus usuarios.</p>
      </>
    )
  },
  {
    id: 18,
    titulo: "18. DEFINICIONES",
    contenido: (
      <>
        <p>VISITANTE: Cualquier persona que en cualquier momento visite o haya visitado la Plataforma.</p>
        <p>USUARIO: Persona natural o jurídica que se haya registrado en la Plataforma, haya celebrado un acuerdo con MH 
          DIGITAL BUSINESS, tenga domicilio legal en Perú y cuente con: i) un número de cuenta en un banco peruano a su 
          disposición para realizar la transferencia de fondos correspondiente; y ii) una tarjeta de crédito aprobada con 
          saldo disponible para compras.</p>
        <p>CUENTA: Espacio del USUARIO en una entidad bancaria donde se realizará el depósito del efectivo o la transferencia 
          de fondos correspondiente, luego de cancelados los recibos de servicios del USUARIO.</p>
        <p>TRANSACCIONES: Medio de registro de las operaciones solicitadas y ejecutadas dentro de la Plataforma.</p>
        <p>HISTORIAL DE TRANSACCIONES: El USUARIO podrá acceder al detalle de sus operaciones realizadas y otra información 
          relacionada con su cuenta haciendo clic en la pestaña “Mi Cuenta”, previa autenticación en su cuenta personal.</p>
        <p>TRANSFERENCIA INTERBANCARIA: Transferencias realizadas entre cuentas de bancos locales distintas a aquellas en las 
          que MH DIGITAL BUSINESS mantiene cuentas.</p>
        <p>TRANSFERENCIA INTERPLAZA: En el caso de que el USUARIO no tenga cuentas en Lima, MH DIGITAL BUSINESS deducirá del 
          monto a enviar, como resultado de la operación, los costos bancarios asociados al envío de dinero a otra plaza.</p>
        <p>TRANSFERENCIA INMEDIATA: Transferencias interbancarias que pueden ejecutarse en un aproximado de quince (15) minutos, 
          donde la entidad financiera establecerá una comisión por dicho servicio que EL USUARIO deberá asumir.</p>
        </>
    )
  },
  {
    id: 19,
    titulo: "19. ACUERDO COMPLETO",
    contenido: (
      <>
        <p>El presente contrato y cualquier documento expresamente mencionado en él constituyen el acuerdo íntegro entre 
          EL USUARIO y MH DIGITAL BUSINESS, y sustituyen cualquier discusión, correspondencia, acuerdos o entendimientos anteriores 
          entre las partes.</p>
        <p>Para la interpretación, cumplimiento y ejecución de estos términos y condiciones, las partes acuerdan que serán aplicables 
          las leyes vigentes en la República del Perú, renunciando expresamente a cualquier otra jurisdicción que pudiera 
          corresponderles en razón de sus domicilios presentes o futuros, sometiéndose a la competencia y jurisdicción de los Jueces 
          y Tribunales de Lima, Perú.</p>
        <p>MH DIGITAL BUSINESS, enero de 2025.</p>
      </>
    )
  },

 
];

export default function TerminosCondiciones() {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggle = (id: number) => {
    setAbierto(abierto === id ? null : id);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-8 sm:px-12 md:px-10">
        
        {/* Título Principal */}
        <h1 className="text-[#1646C6] text-[24px] md:text-[30px] font-bold text-center mb-10 uppercase tracking-tight">
          Términos y Condiciones
        </h1>

        {/* Introducción */}
        <div className="text-[#6B6B6B] text-[17px] mb-12 space-y-2 leading-[1.3] text-justify">
          <p>
            El presente Acuerdo es un contrato entre usted e MH DIGITAL BUSINESS S.A.C (en adelante, “MH DIGITAL BUSINESS”, o “la Empresa”) 
            a efectos de hacer uso de los servicios brindados por nuestra empresa. Al registrarse, usted acepta todos los términos y condiciones 
            establecidos en el presente contrato, lo que le permitirá utilizar los servicios de “MH DIGITAL BUSINESS”. Por favor, lea este contrato detalladamente y asegúrese de entenderlo en su totalidad antes de utilizar los servicios. Tenga en cuenta que el utilizar los servicios prestados por MH DIGITAL BUSINESS implica una aceptación de los términos de este Acuerdo. MH DIGITAL BUSINESS no se hace responsable por la omisión o falta de lectura total o parcial de los Términos y Condiciones del uso de la plataforma.
          </p>
          <p>
            Al aceptar este contrato, aceptas que podamos comunicarnos por: teléfono, correo electrónico, whatsapp o publicando avisos en LA PLATAFORMA.
          </p>
          <p>
            MH DIGITAL BUSINESS se reserva el derecho a modificar el presente Acuerdo de forma unilateral y sin previo aviso mediante la publicación de una nueva versión en el sitio web de la Empresa
          </p>
        </div>

        {/* Acordeón de Secciones */}
        <div className="space-y-4">
          {SECCIONES.map((sec) => (
            <div key={sec.id} className="border-none">
              <button
                onClick={() => toggle(sec.id)}
                className={[
                  "w-full flex items-center justify-between transition-colors px-6 py-2 rounded-[12px]",
                  abierto === sec.id
                    ? "bg-[#FFB81C]"
                    : "bg-[#F0F4FF] hover:bg-[#E5EDFF]", 
                ].join(" ")}
              >
                <span
                  className={[
                    "font-bold text-[16px] md:text-[18px]",
                    abierto === sec.id ? "text-[#1646C6]" : "text-[#1646C6]", // ✅ azul en ambos (si quieres diferente, cambia aquí)
                  ].join(" ")}
                >
                  {sec.titulo}
                </span>

                <ChevronDown
                  size={24}
                  className={[
                    "transition-transform duration-300",
                    abierto === sec.id ? "rotate-180 text-[#1646C6]" : "text-[#1646C6]",
                  ].join(" ")}
                />
              </button>

              <AnimatePresence>
                {abierto === sec.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 text-[#555555] text-[15px] leading-[1.6] space-y-3 border-x border-b border-[#F0F4FF] rounded-b-[12px] text-justify">
                      {sec.contenido}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}