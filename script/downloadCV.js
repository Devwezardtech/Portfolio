function downloadCV() {
   var fileID = '1CGzOlWbTHa7Hnhl2hpNLDHo66xlM_kK-';
   var downloadLink = 'https://drive.google.com/uc?export=download&id=' + fileID;

   var link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'ejemar_maloloy-on_web_developer_resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
   }
   
