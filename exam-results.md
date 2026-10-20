# Resultados del parcial práctico 2

Registrar resultados reales después de implementar y probar los endpoints. Sustituir los IDs de ejemplo por los utilizados.

| Petición y datos utilizados | Código esperado | Código obtenido | Observación |
| --- | --- | --- | --- |
| Crear una reserva con datos válidos y sala existente. | 201 | Pendiente | |
| Crear con participants como texto. | 400 | Pendiente | |
| Crear con una propiedad adicional, como status. | 400 | Pendiente | |
| Crear con una sala inexistente. | 404 | Pendiente | |
| Cancelar una reserva activa y consultar el cambio guardado. | 200 | Pendiente | |
| Cancelar de nuevo la misma reserva. | 409 | Pendiente | |
| Intentar cancelar con ID abc. | 400 | Pendiente | |
| Intentar cancelar con un ID entero inexistente. | 404 | Pendiente | |

## Pruebas unitarias

Registrar el resultado de `npm test`.

| Caso | Resultado obtenido |
| --- | --- |
| 1. La regla real rechaza una reserva cancelada. | Pendiente |
| 2. El servicio cancela y guarda una reserva activa. | Pendiente |
| 3. Si la regla simulada rechaza, conserva active y no guarda. | Pendiente |

Resumen de ejecución: pendiente.
# Resultados

## Peticiones
| # | Petición | Código obtenido |
|---|----------|-----------------|
| 1 | POST válido | 201 |
| 2 | participants "3" | 400 |
| 3 | propiedad extra status | 400 |
| 4 | sala inexistente | 404 |
| 5 | PATCH cancel activa | 200 |
| 6 | PATCH cancel otra vez | 409 |
| 7 | /abc/cancel | 400 |
| 8 | ID inexistente | 404 |

## npm test
Tests: 3 passed, 3 total es el esperado
//
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        1.486 s