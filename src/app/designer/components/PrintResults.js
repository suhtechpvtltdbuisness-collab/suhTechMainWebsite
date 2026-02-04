"use client";

import React, { useState, useEffect } from "react";
import { Printer, ChevronDown } from "lucide-react";
import Loading from "../../../components/commons/loading";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ added

const PrintResults = ({
  loader,
  loderMsg,
  mockupUrl,
  errorMsg,
  addToCart,
  setActiveTab,
  productOptions,
}) => {
  const [selectedVariants, setSelectedVariants] = useState({});
  const [variantPrices, setVariantPrices] = useState({});
  const [variantSizes, setVariantSizes] = useState({});
  const [productBuckets, setProductBuckets] = useState([]);

  // Handle variant selection
  const handleVariantChange = (productId, variantId) => {
    let product = null;
    if (
      mockupUrl?.mockups?.successful &&
      Array.isArray(mockupUrl.mockups.successful)
    ) {
      product = mockupUrl.mockups.successful.find(
        (item) => item.product_id === productId
      );
    } else if (mockupUrl?.mockups && Array.isArray(mockupUrl.mockups)) {
      product = mockupUrl.mockups.find((item) => item.product_id === productId);
    }

    if (!product) return;

    const variant = product.pricing.variants[variantId];
    if (!variant) return;

    setSelectedVariants({
      ...selectedVariants,
      [productId]: variantId,
    });

    setVariantPrices({
      ...variantPrices,
      [productId]: variant.price,
    });

    setVariantSizes({
      ...variantSizes,
      [productId]: variant.size,
    });
  };

  const getDefaultVariant = (product) => {
    if (!product || !product.pricing?.variants) return null;
    return Object.keys(product.pricing.variants)[0];
  };

  const getMockups = () => {
    if (
      mockupUrl?.mockups?.successful &&
      Array.isArray(mockupUrl.mockups.successful)
    ) {
      return mockupUrl.mockups.successful;
    } else if (mockupUrl?.mockups && Array.isArray(mockupUrl.mockups)) {
      return mockupUrl.mockups;
    }
    return [];
  };

  useEffect(() => {
    const mockups = getMockups();
    if (mockups.length > 0) {
      const firstBucketProducts = mockups.filter((product) =>
        ["206", "821", "660", 206, 821, 660].includes(product.product_id)
      );

      const secondBucketProducts = mockups.filter(
        (product) =>
          !["206", "821", "660", 206, 821, 660].includes(product.product_id)
      );

      const buckets = [];
      if (firstBucketProducts.length > 0) buckets.push(firstBucketProducts);
      if (secondBucketProducts.length > 0) buckets.push(secondBucketProducts);
      setProductBuckets(buckets);

      // Initialize default variants/prices/sizes for products without selection
      setSelectedVariants((prev) => {
        const next = { ...prev };
        mockups.forEach((product) => {
          const productId = product.product_id;
          const defaultVariant = getDefaultVariant(product);
          if (defaultVariant && !next[productId]) {
            next[productId] = defaultVariant;
          }
        });
        return next;
      });

      // Initialize variantPrices and variantSizes from mockups
      setVariantPrices((prev) => {
        const next = { ...prev };
        mockups.forEach((product) => {
          const productId = product.product_id;
          const defaultVariant = getDefaultVariant(product);
          if (defaultVariant && product.pricing?.variants?.[defaultVariant]) {
            next[productId] = product.pricing.variants[defaultVariant].price;
          }
        });
        return next;
      });

      setVariantSizes((prev) => {
        const next = { ...prev };
        mockups.forEach((product) => {
          const productId = product.product_id;
          const defaultVariant = getDefaultVariant(product);
          if (defaultVariant && product.pricing?.variants?.[defaultVariant]) {
            next[productId] = product.pricing.variants[defaultVariant].size;
          }
        });
        return next;
      });
    }
    // only rerun when mockupUrl changes
  }, [mockupUrl]);

  const handleAddBucketToCart = (bucket) => {
    const individualPrice = 33;
    const bundlePrice = 99;
    const bundleId = `bundle-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const cartItems = bucket
      .map((product) => {
        const productId = product.product_id;
        const variantId = selectedVariants[productId];
        if (!variantId) return null;

        return {
          product_id: productId,
          variant_id: variantId,
          price: individualPrice,
          bundle_price: bundlePrice,
          bundle_id: bundleId,
          name: product.product_name,
          size: variantSizes[productId],
          image: product.mockupUrl,
          designText: product.placement || "Custom Design",
          designUrl: "",
          pricing: { variants: product.pricing.variants },
        };
      })
      .filter(Boolean);

    if (cartItems.length > 0) {
      addToCart(...cartItems);
      setActiveTab("cart");
    }
  };

  const isBucketComplete = (bucket) =>
    bucket.every((product) => selectedVariants[product.product_id]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemAnim = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const mockups = getMockups();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      {/* Banner */}
      {mockups.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold mb-1">🎉 Your designs are ready!</h3>
          <p>
            Select sizes and add bundles to your cart for just $99 per bundle!
          </p>
        </motion.div>
      )}

      <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-6">
        Print Results
      </h2>

      {loader ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-blue-600 dark:text-blue-400 mb-4">{loderMsg}</p>
          <Loading />
        </div>
      ) : mockups.length > 0 ? (
        <motion.div variants={container} initial="hidden" animate="show">
          {productBuckets.map((bucket, bucketIndex) => (
            <motion.div
              key={bucketIndex}
              variants={itemAnim}
              className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:mb-0 last:pb-0"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Product Bundle {bucketIndex + 1}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {bucket.map((item, i) => {
                  const productId = item.product_id;
                  const variants = item.pricing?.variants || {};

                  return item.mockupUrl ? (
                    <motion.div
                      key={productId}
                      variants={itemAnim}
                      className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      {/* FIXED NEXT.IMAGE */}
                      <div className="w-full aspect-square relative">
                        <Image
                          src={item.mockupUrl}
                          alt={`Mockup for ${item.product_name}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                          {item.product_name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Retail Price: ${item.pricing.retail_price.toFixed(2)}
                        </p>

                        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
                          Select Size
                        </label>
                        <div className="relative mb-3">
                          <select
                            value={selectedVariants[productId] || ""}
                            onChange={(e) =>
                              handleVariantChange(productId, e.target.value)
                            }
                            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                          >
                            <option value="" disabled>
                              Choose a size
                            </option>
                            {Object.entries(variants).map(
                              ([variantId, variant]) => (
                                <option key={variantId} value={variantId}>
                                  {variant.size} - $
                                  {variant.price.toFixed(2)}
                                </option>
                              )
                            )}
                          </select>

                          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 dark:text-gray-400">
                            <ChevronDown size={16} />
                          </div>
                        </div>

                        {selectedVariants[productId] && (
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            Size: {variantSizes[productId]}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={i}
                      variants={itemAnim}
                      className="flex items-center justify-center h-40 bg-red-50 dark:bg-red-900 rounded-lg"
                    >
                      <span className="text-red-600 dark:text-red-300">
                        Unable to load image
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center p-5 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Bundle Summary
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {bucket.length} items •{" "}
                    <span className="text-orange-500 font-semibold">
                      Bundle Price: $99.00
                    </span>
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddBucketToCart(bucket)}
                  disabled={!isBucketComplete(bucket)}
                  className={`px-6 py-3 rounded-md text-white font-medium ${
                    isBucketComplete(bucket)
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                  }`}
                >
                  {isBucketComplete(bucket)
                    ? "Add Bundle to Cart ($99.00)"
                    : "Please Select All Sizes"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : errorMsg ? (
        <div className="flex items-center justify-center h-40 bg-red-50 dark:bg-red-900 rounded-lg">
          <span className="text-red-600 dark:text-red-300">{errorMsg}</span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4 mb-4">
            <Printer size={32} className="text-gray-400 dark:text-gray-500" />
          </div>

          <h3 className="text-gray-600 dark:text-gray-400 font-medium mb-2">
            No Print Results Yet
          </h3>

          <p className="text-gray-500 dark:text-gray-500 max-w-md">
            Create a design in the editor and click “Print” to generate mockups.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("editor")}
            className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Go to Editor
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default PrintResults;
