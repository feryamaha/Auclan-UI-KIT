const fs = require("fs");
const path = require("path");

// Diretórios onde os SVGs estão localizados
const iconsDirs = [
  'public/assets/icons',
  'public/assets/icons/footer'
];

// Caminho de saída para o arquivo IconsList.tsx
const outputPath = 'src/scripts/IconsList.tsx';

// Função para normalizar o conteúdo SVG para comparação
function normalizeSvgContent(content) {
  return content
    .replace(/\s+/g, '') // Remove todos os espaços em branco
    .replace(/<!--.*?-->/g, '') // Remove comentários
    .replace(/<\?xml.*?\?>/g, '') // Remove declaração XML
    .replace(/<!DOCTYPE.*?>/g, '') // Remove DOCTYPE
    .trim();
}

// Função para extrair o nome base do arquivo (sem extensão e sem números)
function getBaseName(fileName) {
  return fileName
    .replace(/\.svg$/i, '') // Remove extensão .svg
    .replace(/-/g, '') // Remove hífens
    .replace(/^(icon|duicon|du)/i, '') // Remove prefixos comuns
    .split(/(?=[A-Z])/) // Divide em palavras quando encontra letra maiúscula
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza primeira letra de cada palavra
    .join('') // Junta as palavras
    .trim();
}

// Função para gerar um nome de componente único
function getUniqueComponentName(baseName, svgContent, svgMap) {
  const normalizedContent = normalizeSvgContent(svgContent);

  // Verifica se já existe um SVG idêntico
  for (const [existingContent, existingName] of svgMap.entries()) {
    if (normalizedContent === existingContent) {
      return existingName; // Retorna o nome existente se o SVG for idêntico
    }
  }

  // Se não for idêntico, usa o nome base com prefixo Icon
  const componentName = `Icon${baseName}`;

  // Se o nome já existir, adiciona um sufixo numérico
  let counter = 1;
  let finalName = componentName;
  while (Array.from(svgMap.values()).includes(finalName)) {
    finalName = `${componentName}${counter.toString().padStart(2, '0')}`;
    counter++;
  }

  // Adiciona ao mapa de SVGs únicos
  svgMap.set(normalizedContent, finalName);
  return finalName;
}

// Função para converter SVG em componente React
function svgToComponent(svgContent, componentName) {
  // Extrai o conteúdo interno do SVG
  const svgOpenTagMatch = svgContent.match(/<svg[^>]*>/);
  const svgCloseTagMatch = svgContent.match(/<\/svg>/);
  if (!svgOpenTagMatch || !svgCloseTagMatch) return '';
  const svgOpenTag = svgOpenTagMatch[0];
  const innerContent = svgContent
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '');

  // Preserva as cores originais do logo institucional
  let processedSvg;
  if (componentName === 'IconLogoinstitucional') {
    processedSvg = `${svgOpenTag.replace(/>$/, '')} {...props}>${innerContent}</svg>`
      .replace(/width="[^"]*"/, 'width="154"')
      .replace(/height="[^"]*"/, 'height="24"');
  } else {
    processedSvg = `${svgOpenTag.replace(/>$/, '')} {...props}>${innerContent}</svg>`
      .replace(/width="[^"]*"/, 'width="24"')
      .replace(/height="[^"]*"/, 'height="24"')
      .replace(/fill="[^"]*"/g, 'fill="currentColor"')
      .replace(/stroke="[^"]*"/g, 'stroke="currentColor"');
  }

  return `const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => (${processedSvg});\n\n`;
}

// Função principal para gerar os componentes
function generateIcons() {
  const svgMap = new Map(); // Mapa para rastrear SVGs únicos
  let components = '';
  let exports = [];

  // Processa cada diretório
  iconsDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      console.warn(`Diretório não encontrado: ${dir}`);
      return;
    }

    const files = fs.readdirSync(dir).filter(file => file.endsWith('.svg'));

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const svgContent = fs.readFileSync(filePath, 'utf8');
      const baseName = getBaseName(file);
      const componentName = getUniqueComponentName(baseName, svgContent, svgMap);

      components += svgToComponent(svgContent, componentName);
      if (!exports.includes(componentName)) {
        exports.push(componentName);
      }
    });
  });

  // Ordena os exports alfabeticamente
  exports.sort((a, b) => a.localeCompare(b));

  // Gera o arquivo final
  const fileContent = `import React from 'react';\n\n${components}export const icons = {\n${exports.map(name => `  ${name},`).join('\n')}\n};\n`;

  fs.writeFileSync(outputPath, fileContent);

  // Estatísticas
  console.log(`Arquivo IconsList.tsx gerado com sucesso!`);
  console.log(`Total de SVGs únicos encontrados: ${svgMap.size}`);
  console.log(`Total de componentes gerados: ${exports.length}`);
}

// Executa o script
generateIcons();
