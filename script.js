function mostrarAlerta(){
    alert('Era brincadeirinha! Não clica ai não, se você clicar, entra um virús no seu pc, pegando todos os seus dados, invadindo todos os seus arquivos.')
}
document.addEventListener('DOMContentLoaded', (event) => {
    const imagens = [
        './igms/teste1.jpg', 
        './igms/teste2.jpg', 
        './igms/teste3.jpg',
        './igms/teste4.jpg',
        './igms/teste5.jpg',
        './igms/teste6.jpg',
        './igms/teste7.jpg',
        './igms/teste8.jpg'
    ];
    let currentIndex = 0;
    const galeriaImagem = document.getElementById('galeriaImagem');
    const próximoButton = document.getElementById('nextImage');
    

    próximoButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagens.length;
    galeriaImagem.src = imagens [currentIndex];
    });

    
    const prevButton = document.getElementById('previousImage');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + imagens.length) % imagens.length 
        galeriaImagem.src = imagens [currentIndex];
    });

    
});