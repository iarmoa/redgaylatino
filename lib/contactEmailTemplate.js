import { questions } from "./contactEmailConstants";

const buildFields = (data = {}) => {
    let content = '';
    for(let key in questions){
        content += `
        <tr>
            <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="25%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                    <tr>
                        <td style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px">
                        <div style="font-family:sans-serif">
                            <div style="font-size:14px;mso-line-height-alt:16.8px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif">
                                <p style="margin:0;font-size:14px"><strong>${questions[key]}:</strong></p>
                            </div>
                        </div>
                        </td>
                    </tr>
                </table>
            </td>
            <td class="column column-2" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="75%">
                <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                    <tr>
                        <td style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px">
                        <div style="font-family:sans-serif">
                            <div style="font-size:14px;mso-line-height-alt:16.8px;color:#555;line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif">
                                <p style="margin:0;font-size:14px">${data[key] ? data[key] : 'Sin respuesta'}</p>
                            </div>
                        </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>`;
    }

    return content;
}

const contactEmailTemplate = (data = {}) => {
    return (`
    <div>
    <style>
        *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}@media (max-width:520px){.icons-inner{text-align:center}.icons-inner td{margin:0 auto}.row-content{width:100%!important}.column .border{display:none}.stack .column{width:100%;display:block}}
    </style>
    <div style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff" width="100%">
            <tbody>
                <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                        <tbody>
                            <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:1000px" width="500">
                                    <tbody>
                                        <tr>
                                        <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%">
                                            <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                                <tr>
                                                    <td style="width:100%;text-align:center">
                                                    <h1 style="margin:0;color:#555;font-size:23px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:120%;text-align:center;direction:ltr;font-weight:700;letter-spacing:normal;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">Red Gay Latino - Ser Parte</span></h1>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                        <tbody>
                            <tr>
                            <td>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:1000px" width="500">
                                    <tbody>
                                        ${ buildFields(data) }
                                    </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    `)
} 

export default contactEmailTemplate;