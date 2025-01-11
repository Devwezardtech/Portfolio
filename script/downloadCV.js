function downloadCV() {
   var fileID = '1Q_bepA7kMD0VG6SkvliHGdxL2n0h4JFI';
   var downloadLink = 'https://drive.google.com/uc?export=download&id=' + fileID;

   var link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'EJEMAR MALOLOY-ON_RESUME.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }
   