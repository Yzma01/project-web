# Examen_1 Progra IV

---

Para correr el proyecto, sigue estos pasos:

1. En la carpeta deseada, ejecuta el siguiente comando para clonar el repositorio:
    ```bash
    git clone https://github.com/Yzma01/EXAMEN_imarchena.git
    ```

2. Luego, instala las dependencias del proyecto con el siguiente comando:
    ```bash
    npm i
    ```

3. Después de instalar las dependencias, inicia el servidor con el siguiente comando:
    ```bash
    npm run dev
    ```

Este comando establecerá todas las conexiones necesarias y pondrá el API en escucha.

## Endpoints disponibles

### Model User

Campos del modelo:
```json
{
    "name": "name",
    "lastName": "lastname",
    "email": "email",
    "username": "username",
    "userId": "userId",
    "password": "password",
    "rol": "rol"    ["admin", "worker"]
}
```
#### EndPoints
