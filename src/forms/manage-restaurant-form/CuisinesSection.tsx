import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
    const { control } = useFormContext(); // helps us link our form fiels to the form

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Cuisines</h2>
                <FormDescription>
                    Select the cuisines your restaurant serves
                </FormDescription>
            </div>
            <FormField control={control} name="cuisines" 
            render={({ field }) => (
                <FormItem>
                    <div className="grid md:grid-cols-5 gap-1">
                        {
                            cuisineList.map((cuisineItem) => (
                                <CuisineCheckbox
                                    // key={cuisineItem} // Add a unique key here
                                    cuisine={cuisineItem}
                                    field={field}
                                />
                            ))
                        }
                    </div>
                    <FormMessage className="text-red-500"/>
                </FormItem>
            )} />
        </div>
    );
};

export default CuisinesSection;
