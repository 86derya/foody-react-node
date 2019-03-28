import { schema } from 'normalizr'; // const denormalized = xxx.json;

const dishesSchema = new schema.Entity('dishes', undefined, {
  idAttribute: '_id',
});

export default dishesSchema;
