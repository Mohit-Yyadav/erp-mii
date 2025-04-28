 const checkMissingFields = (requiredFields, requestBody) => {
    const missingFields = requiredFields.filter(field => !requestBody[field]);

    if (missingFields.length > 0) {
        return {
            success: false,
            message: "All fields are required",
            missingFields
        };
    }

    return null; // No missing fields
};

export default checkMissingFields;