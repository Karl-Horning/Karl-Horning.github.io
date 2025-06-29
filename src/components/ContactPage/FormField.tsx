import { twMerge } from "tailwind-merge";

/**
 * Supported HTML input types for form fields.
 */
export enum FormFieldType {
    Text = "text",
    Email = "email",
    Password = "password",
    Tel = "tel",
    Url = "url",
    Number = "number",
    Search = "search",
}

/**
 * Props for the reusable form field component.
 */
type FormFieldProps = {
    /** The ID of the form field */
    id: string;

    /** The name of the form field */
    name: string;

    /** HTML input type, ignored if `isTextarea` is true */
    type?: FormFieldType | `${FormFieldType}`;

    /** Visible field label */
    label: string;

    /** Whether the field is required */
    required?: boolean;

    /** Auto-complete behaviour */
    autoComplete?: string;

    /** Placeholder value (usually a single space for floating labels) */
    placeholder?: string;

    /** Optional accessibility hint */
    hint?: string;

    /** Use a <textarea> instead of an <input> */
    isTextarea?: boolean;

    /** Number of rows if using a textarea */
    rows?: number;
};

/**
 * Renders a labelled input or textarea with accessibility and styling baked in.
 *
 * Uses floating label and peer interaction styles.
 *
 * @component
 * @returns The JSX for a styled form field component.
 */
export default function FormField({
    id,
    name,
    type = FormFieldType.Text,
    label,
    required = false,
    autoComplete,
    placeholder = " ",
    hint,
    isTextarea = false,
    rows = 5,
}: FormFieldProps) {
    const baseInputClass = twMerge(
        "peer w-full rounded-lg border border-transparent bg-surface p-3 pt-6 focus:outline-none focus:ring-2 focus:ring-primary",
        isTextarea && "mt-1 resize-none"
    );

    const labelClass =
        "absolute left-3 top-2 text-sm text-primary transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary";

    const hintClass =
        "mt-1 block text-sm text-primary opacity-0 transition-opacity duration-200 peer-placeholder-shown:opacity-0 peer-focus:opacity-100";

    return (
        <div className="relative">
            {isTextarea ? (
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    required={required}
                    placeholder={placeholder}
                    aria-describedby={hint ? `${id}Hint` : undefined}
                    className={baseInputClass}
                />
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    required={required}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    aria-describedby={hint ? `${id}Hint` : undefined}
                    className={baseInputClass}
                />
            )}

            <label htmlFor={id} className={labelClass}>
                {label}
                {required && <span className="text-primary">*</span>}
            </label>

            {hint && (
                <span id={`${id}Hint`} className={hintClass}>
                    {hint}
                </span>
            )}
        </div>
    );
}
