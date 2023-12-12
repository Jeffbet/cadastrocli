document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clientForm') as HTMLFormElement;
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(form);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
      };
  
      // Enviar dados para o servidor (ainda não implementado)
      console.log('Dados do formulário:', data);
    });
  });
  