class mask{
    handleZipCode = (event:any) => {
        let input = event.target
        input.value = this.zipCodeMask(input.value)
    }
    
    zipCodeMask = (val:any) => {
        if (!val) return "";
        val = val.replace(/\D/g, '');
        val = val.replace(/(\d{5})(\d)/, '$1-$2');
        return val;
    }
    
    
    /*
    ** No HTML
    <input class="input" type="tel" maxlength="9" onkeyup="handleZipCode(event)">
     
    */
    
    
    // Phone
    handlePhone = (event:any) => {
        let input = event.target;
        input.value = this.phoneMask(input.value);
    }
    
    phoneMask = (val:any)  => {
        if (!val) return '';
        val = val.replace(/\D/g, '');
        val = val.replace(/(\d{2})(\d)/, '($1) $2');
        val = val.replace(/(\d)(\d{4})$/, '$1-$2');
        return val;
    }
    
}