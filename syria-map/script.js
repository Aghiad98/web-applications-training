    document.getElementById('govModal').addEventListener('show.bs.modal', e => {
      document.getElementById('govTitle').textContent = e.relatedTarget.dataset.name;
    });
     const photos = document.querySelectorAll('.photo');
    
    const gov = document.querySelectorAll('.gov')
  
    gov.forEach(btn => {
      btn.addEventListener('click', () => {
        photos.forEach((img, i) => { img.src = `img/places/${btn.dataset.name}-${i + 1}.jpg`; });
      });
    });