const es = {
  createPassword: {
    clipboardCleared: 'El portapapeles ha sido borrado.',
    clearClipboardButton: 'BORRAR PORTAPAPELES',
  },
  confirmationDialog: {
    completedStatus: '¡Completo!',
    completedClipboard: 'La contraseña está copiado al portapapeles.',
    passwordAccessibilityLabel: 'Contraseña generada',
    button: 'COMENZAR DE NUEVO',
    buttonAccessibilityLabel: 'Pegar para comenzar de nuevo',
  },
  passwordGenerator: {
    nickname: 'Apodo',
    password: 'Contraseña Maestra',
    confirmPassword: 'Confirmar Contraseña Maestra',
    nicknameLabel: '¿Qué es el Apodo de la cuenta?',
    masterPassword: '¿Qué es la Contraseña Maestra?',
    getPassword: 'GENERAR CONTRASEÑA',
    warning: 'Contraseñas no son iguales',
    confirmSwitch: 'Confirmar Contraseña',
    nicknameAccessibilityLabel: 'Entrar el apodo de la cuenta',
    masterPassAccessibilityLabel: 'Reescribir la Contraseña Maestra',
  },
  formInput: {
    password: 'Ocultar o mostrar la Contraseña Maestra',
    label: 'Ocultar o mostrar el Apodo',
  },
  footer: {
    version: 'Versión 1.0.0',
    privacyPolicy: 'Política de Privacidad',
  },
  tipsPage: {
    FAQs: 'Preguntas Frecuentes',
    questions: {
      question_1: {
        title: '¿Qué es Hashphrase?',
        content: {
          paragraph_1: 'Hashphrase lo hace fácil manejar contraseñas únicas.',
          paragraph_2: 'Las mejores prácticas del internet incluyan el uso de una contraseña única por cada cuenta.',
          paragraph_3: 'Las ventajas de Hashphrase:',
          listContent: {
            listItem_1: 'No tienes que memorizar o anotar todas las contraseñas',
            listItem_2: 'No necesitas mantener ningunos archivos',
            listItem_3: 'Solamente debes recordar dos cosas— la contraseña maestra y la regla que tú haces para determinar los apodos por cada cuenta',
            listItem_4: 'La existencia de varias implementaciones de código abierto hace que Hashphrase sea gratis y fácil usar con cualquiera plataforma',
          },
        },
      },
      question_2: {
        title: '¿Cómo crear un apodo?',
        content: {
          paragraph_1: 'Recomendamos que los usarios de Hashphrase creen una regla sencilla que determina el apodo por cada cuenta. Por ejemplo, la regla puede ser "la nombre del sitio web/aplicación a minúscula" (e.g., "gmail", "facebook"). Por otro lado, puede ser "la nombre del dominio asociado con la cuenta" (e.g. "gmail.com", "facebook.com").',
          paragraph_2: 'Lo importante es que recuerdas la regla y que puedes usarla con cada cuenta. Y, por supuesto, la regla debe producir valores diferentes por cuentas diferentes.',
        },
      },
      question_3: {
        title: '¿Recuerda mis contraseñas, la app?',
        content: {
          paragraph_1: 'No, la app recuerda ni los apodos ni las contraseñas maestras. Sin embargo, al fin del flujo de trabajo normal de Hashphrase, la app copia la contraseña maestra al portapapeles del dispositivo.',
        },
      },
      question_4: {
        title: 'Olvidé mi contraseña o apodo.',
        content: {
          paragraph_1: 'La app no archiva ni las contraseñas ni los apodos. Si los olvidas, debes sequir otro método de recuperar la cuenta.',
          paragraph_2: 'Una manera de reducir la posibilidad de olvidar es usar Hashphrase con regularidad para reforzar el proceso en la memoria tuya.',
        },
      },
      question_5: {
        title: '¿Cómo puedo cambiar mi contraseña generada?',
        content: {
          paragraph_1: 'Solamente debes cambiar la regla de los apodos o la contraseña maestra para generar una nueva contraseña.',
        },
      },
      question_6: {
        title: '¿Qué significa "Confirmar Contraseña"?',
        content: {
          paragraph_1: 'Cuando haces una contraseña por primera vez, esta entrada previene un error en la contraseña maestra.',
        },
      },
    },
  },
  policyPage: {
    title: 'Política de Privacidad',
    update: 'Última actualización: 19 de Abril de 2019',
    creator: 'Vermonster LLC ("nosotros", “nuestro/a", "compañía") crea y mantiene la aplicación Hashphrase (“app”). Cualquiera referencia a “tú”, “tuyo”, or “usuario” refiere al usuario que instala y usa la App.',
    privacy_policy: [
      {
        id: 1,
        subheading: 'Aceptación de la Política de Privacidad',
        content: 'Lea esta Política de Privacidad antes de usar la App. Con la instalación y uso de los servicios de la App, el usuario le da el consentimiento a las políticas y prácticas en este documento.',
      },
      {
        id: 2,
        subheading: 'Cambias a la Política de Privacidad',
        content: 'Reservamos el derecho de modificar y actualizar esta Política de Privacidad en cualquier momento. Nosotros indicaremos que la Política ha sido cambiado por editando el dato "Última actualización" encima de este documento. Revisa este documento periodicamente para saber las políticas más recientes.',
      },
      {
        id: 3,
        subheading: 'La Colección y Proceso de Información',
        content: 'No colectemos ni guardamos la información que los usuarios entran en esta aplicación. Las contraseñas generadas están guardando en el portapapeles del aparato del usuario solamente. Nosotros nunca tenemos la intención de colectar información de identificación personal (nombre, email, dirección), y los usuarios no deben proveer información de identificación personal para usar la App. Los usuarios se puede decidir proveer la compañía con este tipo de información si nos contactamos con preguntas o por solicitudes de asistencia.',
      },
      {
        id: 4,
        subheading: 'Solicitudes de Asistencia -- La Colección de Información',
        content: 'Cuando un usuario nos contacta por ayuda o otras comunicaciones, colectamos tu nombre, el contento del mensaje, y la dirección electrónica o otra información que necesitamos para responder. Solicitudes de Asistencia puede ser enviado a info@vermonster.com. Este proyecto es código abierto, y usuarios se pueden enviar asuntos por Github.',
      },
      {
        id: 5,
        subheading: 'El Objetivo del Proceso de la Información',
        content: 'Solamente procesamos la información personal de los usuarios para responder a los solicitudes de asistencia y mantener un archivo de la comunicación entre los usuarios y la compañía. Puede ser que la compañía usa esta información para responder a preguntas sobre el software.',
      },
      {
        id: 6,
        subheading: 'La Base Jurídica del Proceso',
        content: 'Sin esta información, no podemos responder eficazmente a las solicitudes de los usuarios. Mantenemos la mínima de este tipo de información personal para cumplir con nuestras obligaciones a los usuarios.',
      },
      {
        id: 7,
        subheading: 'Terceras Partes',
        content: 'Nunca compartiremos sus datos personales con terceros, y nunca venderemos datos a terceros. Una excepción existe en caso de que recibimos un pedido por información de los cuerpos policiales o gubernales.',
      },
    ],
  },
};

export default es;
