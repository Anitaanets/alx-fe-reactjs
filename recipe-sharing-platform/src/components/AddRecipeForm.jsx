import { useState } from 'react';

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
        if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
        if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Submitted Data:', formData);
            alert('Recipe submitted successfully!');
            setFormData({ title: '', ingredients: '', steps: '' });
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 md:max-w-2xl md:p-10">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Recipe Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={(e) => handleChange(e)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 md:p-3" 
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium">Ingredients</label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={(e) => handleChange(e)}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 md:p-3"
                    />
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium">Preparation Steps</label>
                    <textarea
                        name="steps"
                        value={formData.steps}
                        onChange={(e) => handleChange(e)}
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 md:p-3"
                    />
                    {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 md:p-3">
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
