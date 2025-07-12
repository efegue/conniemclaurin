const fs = require('fs');
const path = require('path');

// Function to read file content
function readFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return '';
    }
}

// Function to replace component placeholders with actual content
function buildIndex() {
    let indexContent = readFile('index-modular.html');
    
    // List of components to include
    const components = [
        { placeholder: '<div id="header-container"></div>', file: 'components/header.html' },
        { placeholder: '<div id="hero-container"></div>', file: 'components/hero.html' },
        { placeholder: '<div id="about-container"></div>', file: 'components/about.html' },
        { placeholder: '<div id="experience-container"></div>', file: 'components/experience.html' },
        { placeholder: '<div id="skills-container"></div>', file: 'components/skills.html' },
        { placeholder: '<div id="contact-container"></div>', file: 'components/contact.html' },
        { placeholder: '<div id="footer-container"></div>', file: 'components/footer.html' }
    ];
    
    // Replace each placeholder with component content
    components.forEach(component => {
        const componentContent = readFile(component.file);
        indexContent = indexContent.replace(component.placeholder, componentContent);
    });
    
    // Remove the component loading script since we're inlining everything
    indexContent = indexContent.replace(/<!-- Load Components -->[\s\S]*?<\/script>/g, '');
    
    // Write the built file
    fs.writeFileSync('index-built.html', indexContent);
    console.log('✅ Built index-built.html successfully!');
}

// Run the build
buildIndex(); 