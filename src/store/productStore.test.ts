import { productStore } from './productStore';

test('add category action', () => {
  const data = 'Furkan';
  productStore.addCategory(data);
  expect(productStore.categories).toStrictEqual([data]);
});

test('remove category action', () => {
  const data = 'Furkan';
  productStore.addCategory(data);
  productStore.removeCategory(data);
  expect(productStore.categories).toStrictEqual([]);
});

test('setSelectedProduct action', () => {
  const data = {
    id: '0360c930-fe28-4993-b9de-16a24c904bd1',
    productName: 'Foxit software PhantomPDF Standard',
    tags: ['PDF', 'Change', 'Create', 'Maintenance', 'Business', 'FoxIT'],
    category: 'Daily Business',
    manufacturerUrl: 'https://www.foxitsoftware.com/de/pdf-editor',
    description: [
      'PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.',
      'Standard - Simple interface and limited functionality.'
    ],
    option1: '1 Year Maintenance',
    option2: 'Without Maintenance'
  };
  productStore.setSelectedProduct(data);
  expect(productStore.selectedProduct).toStrictEqual(data);
});

test('setSearchTerm action', () => {
  const data = 'furkan cabbar';
  productStore.setSearchTerm(data);
  expect(productStore.searchTerm).toStrictEqual(data);
});
