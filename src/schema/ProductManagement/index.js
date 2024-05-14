import * as Yup from "yup";
export const addproductSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    category: Yup.string().required("Category is required"),
    clothingCategories: Yup.string().required("Cloth Category is required"),
    brand: Yup.string().required("Brand is required"),
    color: Yup.array().required("Color is required"),
    material: Yup.string().required("Material is required"),
    size: Yup.array(),
    age:Yup.array(),
    description: Yup.string().required("description is required"),
    featured: Yup.boolean(),
    price: Yup.number().required("Price is required"),
    discount: Yup.number(),
    discountPrice: Yup.number(),
    discountStartDate: Yup.date(),
    discountEndDate: Yup.date()
      .min(Yup.ref('discountStartDate'), 'Discount end date must be greater than start date'),
    tax: Yup.number(),
    totalStockQuantity: Yup.number().required("Total stock quantity is required"),
    availableStock: Yup.number()
      .required("Available stock is required")
      .test('is-less-than-total', 'Available stock must be less than total stock quantity', function(value) {
        const totalStockQuantity = this.resolve(Yup.ref('totalStockQuantity'));
        return value <= totalStockQuantity;
      }),
    stockStatus: Yup.string().required("Stock status is required"),
  });