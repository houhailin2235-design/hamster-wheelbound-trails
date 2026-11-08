import fs from 'node:fs/promises';await fs.mkdir('web',{recursive:true});await fs.copyFile('node_modules/ethers/dist/ethers.umd.min.js','web/ethers.umd.min.js');
