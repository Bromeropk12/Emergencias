"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Phone,
  AlertTriangle,
  Users,
  Heart,
  Brain,
  Shield,
  Clock,
  CheckCircle,
  ArrowDown,
  Stethoscope,
  Activity,
  Database,
  PhoneCall,
  Zap,
  Star,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  Globe,
  MapPin,
  Monitor,
  Smartphone,
  Mail,
  Truck,
  Building2,
  LigatureIcon as Bandage,
  Radio,
  Satellite,
  Compass,
  Route,
} from "lucide-react"

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <FloatingParticles />
    </div>
  )
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ProcessCard = ({
  icon: Icon,
  title,
  description,
  color = "blue",
  delay = 0,
  isActive = false,
  onClick,
  details,
}: {
  icon: any
  title: string
  description: string
  color?: string
  delay?: number
  isActive?: boolean
  onClick?: () => void
  details?: string[]
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    blue: "from-blue-500 via-blue-600 to-blue-700 border-blue-200 shadow-blue-500/25",
    green: "from-green-500 via-green-600 to-green-700 border-green-200 shadow-green-500/25",
    purple: "from-purple-500 via-purple-600 to-purple-700 border-purple-200 shadow-purple-500/25",
    orange: "from-orange-500 via-orange-600 to-orange-700 border-orange-200 shadow-orange-500/25",
    red: "from-red-500 via-red-600 to-red-700 border-red-200 shadow-red-500/25",
    teal: "from-teal-500 via-teal-600 to-teal-700 border-teal-200 shadow-teal-500/25",
    pink: "from-pink-500 via-pink-600 to-pink-700 border-pink-200 shadow-pink-500/25",
    indigo: "from-indigo-500 via-indigo-600 to-indigo-700 border-indigo-200 shadow-indigo-500/25",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      whileHover={{
        scale: 1.08,
        y: -10,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-8 rounded-3xl border-2 cursor-pointer overflow-hidden
        bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]}
        text-white shadow-2xl hover:shadow-3xl transition-all duration-500
        ${isActive ? "ring-4 ring-yellow-400 ring-opacity-75 shadow-yellow-400/50" : ""}
        backdrop-blur-sm
      `}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Sparkle effects */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 300,
                  y: Math.random() * 200,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: 360,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="flex items-start space-x-6">
          <motion.div
            className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-10 h-10" />
          </motion.div>
          <div className="flex-1">
            <motion.h3
              className="text-2xl font-bold mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-base opacity-90 leading-relaxed mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.3 }}
            >
              {description}
            </motion.p>

            {details && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-sm opacity-80"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Star className="w-5 h-5 text-yellow-800" />
          </motion.div>
        </motion.div>
      )}

      {/* Pulse effect for active cards */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-yellow-400"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  )
}

const FlowArrow = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex justify-center my-8"
  >
    <motion.div
      animate={{
        y: [0, 15, 0],
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full shadow-lg">
        <ArrowDown className="w-8 h-8 text-white" />
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full blur-xl opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  </motion.div>
)

const StatCard = ({
  icon: Icon,
  value,
  label,
  color,
  delay,
}: {
  icon: any
  value: string
  label: string
  color: string
  delay: number
}) => {
  const [count, setCount] = useState(0)
  const targetValue = Number.parseInt(value.replace(/\D/g, ""))

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < targetValue) {
            return prev + Math.ceil(targetValue / 50)
          }
          return targetValue
        })
      }, 50)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [targetValue, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-white shadow-xl`}
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 opacity-60" />
        </motion.div>
      </div>
      <motion.div
        className="text-3xl font-bold mb-2"
        key={count}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {count}
        {value.includes("%") ? "%" : ""}
      </motion.div>
      <div className="text-sm opacity-80">{label}</div>
    </motion.div>
  )
}

export default function EmergencyLineActivation() {
  const [activeStep, setActiveStep] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 8)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: AlertTriangle,
      title: "Evento en Salud",
      description: "Detección y notificación inmediata del evento de salud crítico",
      color: "red",
      details: [
        "Identificación automática del evento",
        "Clasificación por nivel de urgencia",
        "Activación de protocolos específicos",
        "Registro en sistema central",
      ],
    },
    {
      icon: Phone,
      title: "Activación Línea de Emergencia",
      description: "Activación inmediata del sistema de respuesta de emergencias",
      color: "blue",
      details: [
        "Conexión directa con central de emergencias",
        "Asignación de equipo especializado",
        "Coordinación de recursos disponibles",
        "Establecimiento de comunicación continua",
      ],
    },
    {
      icon: Truck,
      title: "Atención Inicial Especializada",
      description: "Primera respuesta por profesional de enfermería especializado",
      color: "green",
      details: [
        "Evaluación primaria del paciente",
        "Estabilización de signos vitales",
        "Administración de primeros auxilios",
        "Preparación para traslado si es necesario",
      ],
    },
    {
      icon: Building2,
      title: "Coordinación Secretaría Distrital",
      description: "Integración con Secretaría Distrital de Salud línea 123",
      color: "purple",
      details: [
        "Reporte oficial del caso",
        "Coordinación de recursos hospitalarios",
        "Seguimiento epidemiológico",
        "Integración con sistema de salud distrital",
      ],
    },
    {
      icon: Brain,
      title: "Atención Psicológica Especializada",
      description: "Intervención psicológica para manejo de crisis y trauma",
      color: "teal",
      details: [
        "Evaluación del estado mental",
        "Intervención en crisis",
        "Apoyo emocional inmediato",
        "Plan de seguimiento psicológico",
      ],
    },
    {
      icon: Bandage,
      title: "Rehabilitación Física",
      description: "Atención fisioterapéutica para lesiones corporales",
      color: "orange",
      details: [
        "Evaluación de lesiones físicas",
        "Plan de rehabilitación inmediata",
        "Terapia de emergencia",
        "Prevención de complicaciones",
      ],
    },
    {
      icon: Database,
      title: "Registro y Diagnóstico",
      description: "Documentación completa y diagnóstico profesional",
      color: "indigo",
      details: [
        "Registro médico completo",
        "Diagnóstico diferencial",
        "Documentación legal",
        "Historial clínico actualizado",
      ],
    },
    {
      icon: Users,
      title: "Coordinación Familiar",
      description: "Integración del referente familiar y seguimiento continuo",
      color: "pink",
      details: [
        "Contacto con familia",
        "Información sobre el estado del paciente",
        "Coordinación de cuidados",
        "Plan de seguimiento familiar",
      ],
    },
  ]

  const professionals = [
    {
      icon: Stethoscope,
      title: "Enfermería Especializada",
      description:
        "Profesionales certificados en atención de emergencias con protocolos avanzados de respuesta inmediata.",
      color: "from-blue-500 to-blue-600",
      features: ["Certificación en emergencias", "Protocolos avanzados", "Respuesta 24/7", "Equipos especializados"],
    },
    {
      icon: Brain,
      title: "Psicología Clínica",
      description:
        "Especialistas en intervención en crisis y manejo de trauma psicológico en situaciones de emergencia.",
      color: "from-purple-500 to-purple-600",
      features: ["Intervención en crisis", "Terapia de trauma", "Apoyo familiar", "Seguimiento continuo"],
    },
    {
      icon: Activity,
      title: "Fisioterapia de Emergencia",
      description: "Rehabilitación inmediata y prevención de complicaciones en lesiones físicas agudas.",
      color: "from-orange-500 to-orange-600",
      features: [
        "Rehabilitación inmediata",
        "Prevención de complicaciones",
        "Terapia especializada",
        "Equipos modernos",
      ],
    },
    {
      icon: Heart,
      title: "Medicina de Emergencia",
      description: "Médicos especializados en atención crítica y manejo de situaciones de alto riesgo vital.",
      color: "from-red-500 to-red-600",
      features: ["Atención crítica", "Manejo de riesgo vital", "Diagnóstico rápido", "Tratamiento inmediato"],
    },
    {
      icon: Shield,
      title: "Coordinación de Seguridad",
      description: "Especialistas en protocolos de seguridad y coordinación con fuerzas de seguridad.",
      color: "from-green-500 to-green-600",
      features: ["Protocolos de seguridad", "Coordinación institucional", "Manejo de riesgos", "Respuesta integrada"],
    },
    {
      icon: Radio,
      title: "Comunicaciones",
      description: "Especialistas en sistemas de comunicación y coordinación de respuesta multi-institucional.",
      color: "from-teal-500 to-teal-600",
      features: [
        "Sistemas avanzados",
        "Coordinación multi-institucional",
        "Comunicación continua",
        "Tecnología de punta",
      ],
    },
  ]

  const stats = [
    { icon: Clock, value: "< 3", label: "Minutos de respuesta", color: "from-blue-500 to-blue-600" },
    { icon: TrendingUp, value: "98%", label: "Tasa de éxito", color: "from-green-500 to-green-600" },
    { icon: Users, value: "24/7", label: "Disponibilidad", color: "from-purple-500 to-purple-600" },
    { icon: Award, value: "100%", label: "Cobertura", color: "from-orange-500 to-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ y, opacity }}
        className="relative overflow-hidden py-32 px-4 min-h-screen flex items-center"
      >
        <AnimatedBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-teal-600/90"></div>

        <div className="relative max-w-7xl mx-auto text-center text-white z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Phone className="w-16 h-16" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="text-6xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100"
          >
            Sistema de Emergencias
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300"
          >
            Activación Línea de Emergencia
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Protocolo integral de atención en eventos de salud con coordinación profesional especializada, tecnología
            avanzada y respuesta inmediata las 24 horas del día.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Shield, text: "Atención 24/7", color: "from-green-400 to-green-500" },
              { icon: Zap, text: "Respuesta < 3min", color: "from-yellow-400 to-yellow-500" },
              { icon: Heart, text: "Atención Integral", color: "from-red-400 to-red-500" },
              { icon: Globe, text: "Cobertura Total", color: "from-blue-400 to-blue-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex items-center space-x-3 bg-gradient-to-r ${item.color} px-6 py-3 rounded-full shadow-lg backdrop-blur-sm`}
              >
                <item.icon className="w-6 h-6 text-white" />
                <span className="font-semibold text-white">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                delay={1.4 + index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Process Flow */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-8"
            >
              <Target className="w-6 h-6" />
              <span className="font-semibold">Proceso de Activación</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-800 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-600">
              Flujo de Emergencia
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Protocolo completo de atención desde la detección del evento hasta la resolución integral con seguimiento
              continuo y coordinación multi-profesional.
            </p>
          </AnimatedSection>

          <div className="grid gap-12 md:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <AnimatedSection delay={index * 0.15}>
                  <ProcessCard
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    color={step.color}
                    delay={index * 0.15}
                    isActive={activeStep === index}
                    onClick={() => setActiveStep(index)}
                    details={step.details}
                  />
                </AnimatedSection>

                {index < steps.length - 1 && <FlowArrow delay={index * 0.15 + 0.4} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Teams Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"
            style={{ backgroundSize: "400% 400%" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full mb-8"
            >
              <Users className="w-6 h-6" />
              <span className="font-semibold">Equipos Especializados</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-800 mb-8">Profesionales de Elite</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Equipos multidisciplinarios altamente capacitados con tecnología de vanguardia y protocolos
              internacionales de atención de emergencias.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden group"
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${professional.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-r ${professional.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <professional.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{professional.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{professional.description}</p>

                    <div className="space-y-3">
                      {professional.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${professional.color} rounded-full`} />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-full mb-8"
            >
              <Satellite className="w-6 h-6" />
              <span className="font-semibold">Integración Externa</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-800 mb-8">Red de Coordinación</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Integración completa con entidades externas para garantizar atención integral y seguimiento continuo en
              toda la red de salud.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden"
              >
                {/* Animated background elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"
                />

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    >
                      <PhoneCall className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold">Línea 123</h3>
                      <p className="text-green-200">Secretaría Distrital de Salud</p>
                    </div>
                  </div>

                  <p className="text-green-100 leading-relaxed mb-6 text-lg">
                    Coordinación directa con la Secretaría Distrital de Salud para casos que requieren atención
                    especializada externa y seguimiento epidemiológico.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Clock, text: "24/7 Disponible" },
                      { icon: Shield, text: "Respuesta Garantizada" },
                      { icon: Database, text: "Registro Oficial" },
                      { icon: Satellite, text: "Red Integrada" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-green-200"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden"
              >
                {/* Animated background elements */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"
                />

                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -15 }}
                      className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    >
                      <Users className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold">Grupo 6</h3>
                      <p className="text-teal-200">Atención Externa Integral</p>
                    </div>
                  </div>

                  <p className="text-teal-100 leading-relaxed mb-6 text-lg">
                    Notificación de eventos en salud con referente técnico en urgencias para atención integral externa y
                    seguimiento especializado.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Target, text: "Atención Especializada" },
                      { icon: Route, text: "Seguimiento Continuo" },
                      { icon: Award, text: "Calidad Certificada" },
                      { icon: Compass, text: "Orientación Técnica" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2 text-teal-200"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <FloatingParticles />

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full mb-8"
            >
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Tecnología Avanzada</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
              Innovación en Emergencias
            </h2>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
              Sistemas de última generación para garantizar respuesta rápida, coordinación eficiente y atención de
              calidad mundial.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "App Móvil",
                description: "Aplicación móvil para activación rápida y seguimiento en tiempo real",
                features: ["Activación con un toque", "GPS integrado", "Historial médico", "Notificaciones push"],
              },
              {
                icon: Monitor,
                title: "Centro de Control",
                description: "Centro de monitoreo 24/7 con tecnología de punta y personal especializado",
                features: ["Monitoreo continuo", "IA predictiva", "Análisis en tiempo real", "Coordinación automática"],
              },
              {
                icon: Satellite,
                title: "Red Satelital",
                description: "Comunicaciones satelitales para cobertura total sin interrupciones",
                features: ["Cobertura nacional", "Comunicación segura", "Respaldo automático", "Latencia mínima"],
              },
            ].map((tech, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 relative overflow-hidden group"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6"
                    >
                      <tech.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                    <p className="text-blue-200 mb-6 leading-relaxed">{tech.description}</p>

                    <div className="space-y-3">
                      {tech.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-blue-100">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
            >
              <Shield className="w-10 h-10" />
            </motion.div>

            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
              Sistema de Emergencias Integrado
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protocolo diseñado para garantizar la atención oportuna y especializada en eventos de salud, con
              coordinación profesional, tecnología avanzada y seguimiento integral las 24 horas del día.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: Phone, text: "Línea de Emergencia: 123" },
              { icon: Mail, text: "emergencias@salud.gov.co" },
              { icon: MapPin, text: "Cobertura Nacional" },
              { icon: Clock, text: "Disponible 24/7/365" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <contact.icon className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contact.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-700 pt-8"
          >
            <p className="text-gray-400 text-lg">
              © 2024 Sistema de Activación de Línea de Emergencia.
              <span className="text-blue-400"> Salvando vidas con tecnología e innovación.</span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
