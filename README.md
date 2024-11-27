# Seguidor Carrera UTN

## Propósito

Seguidor Carrera UTN está siendo diseñado para ayudar a los estudiantes de la UTN a visualizar su progreso en sus respectivas carreras.
Este proyecto facilitaría la planificación académica al mostrar el recorrido de la carrera y ofrecer herramientas para decidir qué materias cursar o qué finales rendir según las correlatividades.

## Funcionalidades actuales

- Selección de materias:
  Los estudiantes pueden marcar materias como cursando, regularizadas o aprobadas. Estas aparecerán destacadas con diferentes colores para mayor claridad.

- Correlatividades explicadas:
  Al intentar seleccionar una materia no disponible, se explica qué materias deben estar cursadas o regularizadas para acceder a ella.

- Plan de estudios actualizado:
  El proyecto está basado en el Plan 2023 de la carrera de Ingeniería en Sistemas de Información.

- Visual intuitivo:
  Cada año tiene su propia tabla con una lista desplegable para cada materia, organizada de manera clara y fácil de usar.

## Limitaciones actuales
- Sin persistencia:
  Los datos seleccionados no se guardan al refrescar la página, ya que aún no se implementó la funcionalidad de Local Storage.
- Foco en una carrera:
  Actualmente, está diseñado solo para Ingeniería en Sistemas de Información. Se planea agregar soporte para otras carreras en el futuro.

## Tecnologías utilizadas
Este proyecto está siendo desarrollado con:
- HTML
- CSS
- JavaScript

## Uso

Podés probar la versión actual en el siguiente enlace:
[seguidor-carreraUTN](https://santiagodelpercior.github.io/seguidor-carrerautn/)

El uso es completamente intuitivo:

1. Seleccioná materias desde las listas desplegables.
2. Observá cómo cambian los colores según el estado de la materia.
3. Si seleccionás una materia sin cumplir sus correlatividades, el sistema te indicará los requisitos necesarios.

## Próximos pasos
En futuras versiones se planea agregar:

- Local Storage para guardar los datos ingresados.
- Inicio de sesión para gestionar información personalizada.
- Selección de carrera para incluir otros planes académicos.
- Gestión de legajos, parciales y fechas de finales.
- Implementación de materias electivas.
