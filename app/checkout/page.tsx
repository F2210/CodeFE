"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

const SHIPPING_THRESHOLD = 50000;
const SHIPPING_COST = 4990;

const REGIONS = [
  "Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo",
  "Valparaíso", "Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins",
  "Maule", "Ñuble", "Biobío", "La Araucanía", "Los Ríos", "Los Lagos",
  "Aysén del General Carlos Ibáñez del Campo", "Magallanes y de la Antártica Chilena",
];

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

type Step = 1 | 2 | 3;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice } = useCart();
  const [step, setStep] = useState<Step>(1);

  const [contact, setContact] = useState({ nombre: "", apellido: "", email: "", telefono: "" });
  const [shipping, setShipping] = useState({ direccion: "", numero: "", depto: "", ciudad: "", region: "", codigoPostal: "" });
  const [payment, setPayment] = useState({ metodo: "tarjeta", numero: "", expiry: "", cvv: "" });

  const shippingCost = totalPrice >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = totalPrice + shippingCost;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step < 3) {
      setStep((s) => (s + 1) as Step);
    } else {
      router.push("/checkout/confirmacion");
    }
  }

  const stepLabels = ["Contacto", "Envío", "Pago"];

  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <Navbar />
      <div className="pt-[96px] max-w-6xl mx-auto px-5 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a18] mb-4">Checkout</h1>

          {/* Progress */}
          <div className="flex items-center gap-2">
            {stepLabels.map((label, i) => {
              const num = (i + 1) as Step;
              const active = step === num;
              const done = step > num;
              return (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    done ? "bg-green-500 text-white" : active ? "bg-[#E8531A] text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {done ? "✓" : num}
                  </div>
                  <span className={`text-sm font-medium ${active ? "text-[#E8531A]" : "text-gray-400"}`}>{label}</span>
                  {i < 2 && <div className={`h-0.5 w-8 ${done ? "bg-green-500" : "bg-gray-200"}`} />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 space-y-4">
              {step === 1 && (
                <>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Información de contacto</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                      <input required value={contact.nombre} onChange={e => setContact({...contact, nombre: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Apellido *</label>
                      <input required value={contact.apellido} onChange={e => setContact({...contact, apellido: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input required type="email" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                      <input required type="tel" value={contact.telefono} onChange={e => setContact({...contact, telefono: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Dirección de envío</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dirección *</label>
                      <input required value={shipping.direccion} onChange={e => setShipping({...shipping, direccion: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Número *</label>
                      <input required value={shipping.numero} onChange={e => setShipping({...shipping, numero: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Depto / Oficina</label>
                      <input value={shipping.depto} onChange={e => setShipping({...shipping, depto: e.target.value})}
                        placeholder="Opcional"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                      <input required value={shipping.ciudad} onChange={e => setShipping({...shipping, ciudad: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Región *</label>
                      <select required value={shipping.region} onChange={e => setShipping({...shipping, region: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A] bg-white">
                        <option value="">Selecciona región</option>
                        {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
                      <input value={shipping.codigoPostal} onChange={e => setShipping({...shipping, codigoPostal: e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Método de pago</h2>

                  <div className="space-y-3">
                    <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${payment.metodo === "tarjeta" ? "border-[#E8531A]" : "border-gray-200"}`}>
                      <input type="radio" name="metodo" value="tarjeta" checked={payment.metodo === "tarjeta"}
                        onChange={() => setPayment({...payment, metodo: "tarjeta"})} className="accent-[#E8531A]" />
                      <div>
                        <p className="font-semibold text-sm text-gray-900">Tarjeta de crédito / débito</p>
                        <p className="text-xs text-gray-500">Visa, Mastercard, Redcompra</p>
                      </div>
                    </label>
                    <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-colors ${payment.metodo === "transferencia" ? "border-[#E8531A]" : "border-gray-200"}`}>
                      <input type="radio" name="metodo" value="transferencia" checked={payment.metodo === "transferencia"}
                        onChange={() => setPayment({...payment, metodo: "transferencia"})} className="accent-[#E8531A]" />
                      <div>
                        <p className="font-semibold text-sm text-gray-900">Transferencia bancaria</p>
                        <p className="text-xs text-gray-500">Te enviaremos los datos al confirmar</p>
                      </div>
                    </label>
                  </div>

                  {payment.metodo === "tarjeta" && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta *</label>
                        <input required placeholder="•••• •••• •••• ••••" value={payment.numero}
                          onChange={e => setPayment({...payment, numero: e.target.value})}
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Vencimiento *</label>
                          <input required placeholder="MM/AA" value={payment.expiry}
                            onChange={e => setPayment({...payment, expiry: e.target.value})}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV *</label>
                          <input required placeholder="•••" value={payment.cvv}
                            onChange={e => setPayment({...payment, cvv: e.target.value})}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8531A]" />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                {step > 1 ? (
                  <button type="button" onClick={() => setStep((s) => (s - 1) as Step)}
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    ← Volver
                  </button>
                ) : (
                  <Link href="/carrito" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                    ← Volver al carrito
                  </Link>
                )}
                <button type="submit"
                  className="bg-[#E8531A] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#d14518] transition-colors">
                  {step < 3 ? "Continuar →" : "Completar pedido"}
                </button>
              </div>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl p-6 sticky top-[100px]">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Tu pedido</h2>

              {items.length === 0 ? (
                <p className="text-sm text-gray-400">No hay productos.</p>
              ) : (
                <div className="space-y-3 mb-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-700 truncate">{item.name}</p>
                        <p className="text-xs text-gray-400">x{item.quantity}</p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span className={shippingCost === 0 ? "text-green-600 font-medium" : ""}>
                    {shippingCost === 0 ? "Gratis" : formatPrice(SHIPPING_COST)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
