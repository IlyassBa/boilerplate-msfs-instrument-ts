#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const typeToDir = {
  interactor: 'src/Speed/Interactors',
  page: 'src/Pages',
  controller: 'src/Speed/Controller',
  utils: 'src/Utils',
  'event-handler': 'src/EventsHandlers',
  entity: 'src/Pages/Entity',
};

const typeToSuffix = {
  interactor: 'Interactor.ts',
  page: 'Page.tsx',
  controller: 'Controller.ts',
  utils: '.ts',
  'event-handler': '.ts',
  entity: '.ts',
};

const typeToTestSuffix = {
  interactor: 'Interactor.test.ts',
  page: 'Page.test.tsx',
  controller: 'Controller.test.ts',
  utils: '.test.ts',
  'event-handler': '.test.ts',
  entity: '.test.ts',
};

function getTemplate(type, name) {
  switch (type) {
    case 'interactor':
      return `export interface I${name}Interactor {}\n\nexport class ${name}Interactor implements I${name}Interactor {\n  // ...implementation\n}\n`;
    case 'page':
      return `import { DisplayComponent, FSComponent, VNode } from "@microsoft/msfs-sdk";\nimport { ${name}Interactor } from "./Interactors/${name}Interactor";\nimport { ${name}Controller } from "./Controller/${name}Controller";\n\nexport class ${name}Page extends DisplayComponent<any> {\n\n    private static instance: ${name}Page | null = null;\n\n    interactor!: ${name}Interactor;\n    controller!: ${name}Controller;\n\n    private constructor(props: any = { children: [] }) {\n        super(props);\n        // TODO: Construct interactor and controller here\n    }\n\n    public static getInstance(): ${name}Page {\n        if (!${name}Page.instance) {\n            ${name}Page.instance = new ${name}Page();\n        }\n        return ${name}Page.instance;\n    }\n\n    render(): VNode | null {\n        return (\n            <div className="${name.toLowerCase()}-page">\n                <h1>${name} Page</h1>\n            </div>\n        );\n    }\n}\n`;
    case 'controller':
      return `export interface I${name}Controller {}\n\nexport class ${name}Controller implements I${name}Controller {\n  // ...implementation\n}\n`;
    case 'utils':
      return `export function ${name}() {\n  // ...implementation\n}\n`;
    case 'event-handler':
      return `export function ${name}EventHandler() {\n  // ...implementation\n}\n`;
    default:
      return '';
  }
}

function getTestTemplate(type, name) {
  switch (type) {
    case 'interactor':
      return `import { describe, it, expect } from 'vitest';\nimport { ${name}Interactor } from './${name}Interactor';\n\ndescribe('${name}Interactor', () => {\n  it('should be defined', () => {\n    expect(new ${name}Interactor()).toBeDefined();\n  });\n});`;
    case 'page':
      return `import { describe, it, expect } from 'vitest';\nimport { ${name}Page } from './${name}Page';\n\ndescribe('${name}Page', () => {\n  it('should render', () => {\n    expect(${name}Page).toBeDefined();\n  });\n});`;
    case 'controller':
      return `import { describe, it, expect } from 'vitest';\nimport { ${name}Controller } from './${name}Controller';\n\ndescribe('${name}Controller', () => {\n  it('should be defined', () => {\n    expect(new ${name}Controller()).toBeDefined();\n  });\n});`;
    case 'utils':
      return `import { describe, it, expect } from 'vitest';\nimport { ${name} } from './${name}';\n\ndescribe('${name}', () => {\n  it('should be defined', () => {\n    expect(${name}).toBeDefined();\n  });\n});`;
    case 'event-handler':
      return `import { describe, it, expect } from 'vitest';\nimport { ${name}EventHandler } from './${name}EventHandler';\n\ndescribe('${name}EventHandler', () => {\n  it('should be defined', () => {\n    expect(${name}EventHandler).toBeDefined();\n  });\n});`;
    default:
      return '';
  }
}

function createBarebone(type, name, baseDir) {
  const subfolders = ['Controller', 'Entity', 'Interactors'];
  const templates = {
    Controller: {
      file: path.join(baseDir, 'Controller', `${name}Controller.ts`),
      test: path.join(baseDir, 'Controller', `${name}Controller.test.ts`),
      content: `export interface I${name}Controller {}\n\nexport class ${name}Controller implements I${name}Controller {\n  // ...implementation\n}\n`,
      testContent: `import { describe, it, expect } from 'vitest';\nimport { ${name}Controller } from './${name}Controller';\n\ndescribe('${name}Controller', () => {\n  it('should be defined', () => {\n    expect(new ${name}Controller()).toBeDefined();\n  });\n});`
    },
    Entity: {
      file: path.join(baseDir, 'Entity', `${name}.ts`),
      test: path.join(baseDir, 'Entity', `${name}.test.ts`),
      content: `export interface I${name} {}\n\nexport class ${name} implements I${name} {\n  // ...implementation\n}\n`,
      testContent: `import { describe, it, expect } from 'vitest';\nimport { ${name} } from './${name}';\n\ndescribe('${name}', () => {\n  it('should be defined', () => {\n    expect(new ${name}()).toBeDefined();\n  });\n});`
    },
    Interactors: {
      file: path.join(baseDir, 'Interactors', `${name}Interactor.ts`),
      test: path.join(baseDir, 'Interactors', `${name}Interactor.test.ts`),
      content: `export interface I${name}Interactor {}\n\nexport class ${name}Interactor implements I${name}Interactor {\n  // ...implementation\n}\n`,
      testContent: `import { describe, it, expect } from 'vitest';\nimport { ${name}Interactor } from './${name}Interactor';\n\ndescribe('${name}Interactor', () => {\n  it('should be defined', () => {\n    expect(new ${name}Interactor()).toBeDefined();\n  });\n});`
    }
  };
  subfolders.forEach(folder => {
    const dir = path.join(baseDir, folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(templates[folder].file, templates[folder].content);
    fs.writeFileSync(templates[folder].test, templates[folder].testContent);
    console.log('Created:', templates[folder].file);
    console.log('Created:', templates[folder].test);
  });
}

function main() {
  const [,, command, type, rawName, ...rest] = process.argv;
  let targetDir = null;
  // Check if the last argument is a relative directory (e.g., . or ./foo)
  if (rest.length > 0 && (rest[rest.length - 1] === '.' || rest[rest.length - 1].startsWith('./') || rest[rest.length - 1].startsWith('../'))) {
    targetDir = path.resolve(process.cwd(), rest.pop());
  }
  const useHere = !!targetDir;
  if (command !== 'create' || !typeToDir[type] || !rawName) {
    console.log('Usage: clihelper create <interactor|page|controller|utils|event-handler|entity> <Name> [directory]');
    process.exit(1);
  }
  const name = rawName.replace(/[^a-zA-Z0-9_]/g, '');
  let baseDir;
  const projectRoot = path.resolve(__dirname);
  if (type === 'page' && !useHere) {
    // Always create pages in <projectRoot>/src/Pages/<Name>
    baseDir = path.join(projectRoot, 'src', 'Pages', name);
  } else if (useHere) {
    baseDir = path.join(targetDir, name);
  } else {
    baseDir = path.join(process.cwd(), name);
  }
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
  const file = path.join(baseDir, `${name}${typeToSuffix[type]}`);
  const testFile = path.join(baseDir, `${name}${typeToTestSuffix[type]}`);
  if (fs.existsSync(file)) {
    console.error('File already exists:', file);
    process.exit(1);
  }
  fs.writeFileSync(file, getTemplate(type, name));
  fs.writeFileSync(testFile, getTestTemplate(type, name));
  console.log('Created:', file);
  console.log('Created:', testFile);
  if (type === 'page') {
    createBarebone(type, name, baseDir);
  }
}

main();
