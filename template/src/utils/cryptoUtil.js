import forge from 'node-forge'
import Log from './logUtil'

export default {
  encryptPassword: function (password, publicPem) {
    Log.debug('encryptPassword password:' + password + 'publicPem:' + publicPem);

    var publicKey = forge.pki.publicKeyFromPem(publicPem);

    // convert string to UTF-8 encoded bytes
    var buffer = forge.util.createBuffer(password, 'utf8');
    var bytes = buffer.getBytes();

    var encrypted = publicKey.encrypt(bytes, 'RSA-OAEP', {
      md: forge.md.sha1.create(),
      mgf1: {
        md: forge.md.sha1.create()
      }
    });

    // base64-encode encrypted data to send to server
    var b64Encoded = forge.util.encode64(encrypted);

    return b64Encoded;
  },

  decryptPassword: function (encryptedPw, privatePem) {
    Log.debug('decryptPassword encryptedPw:' + encryptedPw + 'privatePem:' + privatePem);

    var privateKey = forge.pki.privateKeyFromPem(privatePem);

    var b64Decoded = forge.util.decode64(encryptedPw);

    var decrypted = privateKey.decrypt(b64Decoded, 'RSA-OAEP', {
      md: forge.md.sha1.create(),
      mgf1: {
        md: forge.md.sha1.create()
      }
    });

    return decrypted;
  },
}
