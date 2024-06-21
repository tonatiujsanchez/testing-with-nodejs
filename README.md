# Configuración de test en Node.js

### 1. Instalar dependencias
        npm i jest supertest -D

### 2. Añadir script en el package.json
        "reset:migrate": "node ./src/tests/testMigrate.js",
        "test": "jest --detectOpenHandles ",
        "pretest": "npm run reset:migrate"

### 3. Crear el archivo index.js en models e importar modelos

### 4. Crear directorio
    src/tests
    
### 5. Crear archivo testMigrate.js en src/tests y copiar el server.js pero con async en sequelize y require('../models')
    ```
        require('../models')
        const sequelize = require('../utils/connection');

        const testMigrate = async () => {
            try {
                await sequelize.sync({ force: true });
                console.log("DB reset exit");
                process.exit()
            } catch (error) {
                console.log(error)
            }
        }

        testMigrate();
    ```

### 6. Crear test (archivos de pruebas) en src/tests

```
    const request = require('supertest')
    const app = require('../app')
```


### 7. Ejecutar test
    npm run test
