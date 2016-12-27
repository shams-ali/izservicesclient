/* eslint max-len: 0 */

const flows = {
  renewal: {
    title: 'Renewal',
    link: 'flow/renewal',
    question: {
      text: 'This is a test question to assess if they are eligible for a renewal..we can have the flow continue after they click yes or no',
      yes: {
        success: 'You are eligible for online assistance. Create your user profile and access free chat here.',
      },
      no: {
        error: 'Please call our hotline as you are not eligible for online assisstance: (310) 123-4567',
      },
    },
  },
  transfer: {
    title: 'Transfer',
    link: 'flow/transfer',
    question: {
      text: 'This is a test question to assess if they are eligible for a transfer..we can have the flow continue after they click yes or no',
      yes: {
        success: 'You are eligible for online assistance. Create your user profile and access free chat here.',
      },
      no: {
        error: 'Please call our hotline as you are not eligible for online assisstance: (310) 123-4567',
      },
    },
  },
};

export default flows;
