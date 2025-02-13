import * as Yup from 'yup';

const channelSchema = (channelsList) => Yup.object({
  name: Yup.string()
    .min(3, 'min')
    .max(20, 'max')
    .required('required')
    .notOneOf(channelsList, 'unic'),
});

export default channelSchema;
